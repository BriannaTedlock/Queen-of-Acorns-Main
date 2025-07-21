'use client'

import { useState } from 'react'
import { storage, db } from '@/lib/firebase'
import {
  ref,
  uploadBytes,
  getDownloadURL,
} from 'firebase/storage'
import {
  collection,
  addDoc,
  Timestamp,
} from 'firebase/firestore'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Label } from '@/components/ui/label'
import { Card, CardContent } from '@/components/ui/card'
import { Progress } from '@/components/ui/progress'
import { toast } from 'sonner'
import { Header } from '@/components/Header'
import { Navbar } from '@/components/NavBar'
import { useFirebaseUser } from '@/contexts/FirebaseAuthContext'

export default function AdminGalleryPage() {
  const [albumName, setAlbumName] = useState('')
  const [images, setImages] = useState<FileList | null>(null)
  const [uploading, setUploading] = useState(false)
  const [progress, setProgress] = useState(0)
  const user = useFirebaseUser()

  const handleUpload = async () => {
    if (!albumName || !images || images.length === 0) {
      toast.error('Please enter album name and select images')
      return
    }

    if (!user) {
      toast.error("You're not authenticated with Firebase yet. Please wait a moment.")
      return
    }

    await user.getIdToken(true)
    await new Promise((res) => setTimeout(res, 250))

    setUploading(true)
    const urls: string[] = []
    const safeAlbum = encodeURIComponent(albumName.trim().replace(/\s+/g, '-'))

    const total = images.length
    let uploaded = 0

    for (const file of Array.from(images)) {
      const safeFilename = encodeURIComponent(file.name.trim())
      const storageRef = ref(storage, `albums/${safeAlbum}/${safeFilename}`)

      try {
        await uploadBytes(storageRef, file)
        const downloadURL = await getDownloadURL(storageRef)
        urls.push(downloadURL)

        uploaded++
        setProgress((uploaded / total) * 100)
      } catch (err) {
        console.error("❌ Upload failed for file:", file.name, err)
        toast.error(`Failed to upload ${file.name}`)
      }
    }

    if (urls.length > 0) {
      await addDoc(collection(db, 'albums'), {
        albumName,
        imageUrls: urls,
        createdAt: Timestamp.now(),
      })

      toast.success('Album uploaded successfully!')
    }

    setAlbumName('')
    setImages(null)
    setProgress(0)
    setUploading(false)
  }

  return (
    <>
      <Header />
      <Navbar />
      <div className="max-w-2xl mx-auto py-10">
        <h1 className="text-3xl font-bold mb-6 text-center">Upload New Album</h1>

        <Card>
          <CardContent className="space-y-4 pt-6">
            <div>
              <Label htmlFor="albumName">Album Name</Label>
              <Input
                id="albumName"
                value={albumName}
                onChange={(e) => setAlbumName(e.target.value)}
                placeholder="E.g. June Wedding"
              />
            </div>

            <div>
              <Label htmlFor="images">Select Images</Label>
              <Input
                id="images"
                type="file"
                multiple
                accept="image/*"
                onChange={(e) => setImages(e.target.files)}
              />
            </div>

            {uploading && (
              <div>
                <Label>Uploading...</Label>
                <Progress value={progress} className="h-2 mt-1" />
              </div>
            )}

            <p className="text-sm text-muted-foreground">
              User: {user ? user.uid : 'Not signed in'} | Uploading: {uploading ? 'Yes' : 'No'}
            </p>

            <Button onClick={handleUpload} disabled={uploading}>
              {uploading ? 'Uploading...' : 'Upload Album'}
            </Button>
          </CardContent>
        </Card>
      </div>
    </>
  )
}
