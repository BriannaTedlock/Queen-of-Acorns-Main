'use client'

import { useState } from 'react'
import { storage } from '@/lib/firebase'
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Label } from '@/components/ui/label'
import { Card, CardContent } from '@/components/ui/card'
import { toast } from 'sonner'

export default function GalleryUploadPage() {
  const [albumName, setAlbumName] = useState('')
  const [files, setFiles] = useState<FileList | null>(null)
  const [uploading, setUploading] = useState(false)

  const handleUpload = async () => {
    if (!albumName || !files?.length) {
      toast.error('Please provide an album name and select images.')
      return
    }

    setUploading(true)
    

    try {
      const uploadPromises = Array.from(files).map((file) => {
        const storageRef = ref(storage, `gallery/${albumName}/${file.name}`)
        return uploadBytesResumable(storageRef, file).then(() =>
          getDownloadURL(storageRef)
        )
      })

      const urls = await Promise.all(uploadPromises)
      toast.success(`Uploaded ${urls.length} images to "${albumName}"`)
      setFiles(null)
      setAlbumName('')
    } catch (error) {
      toast.error('Upload failed')
      console.error(error)
    } finally {
      setUploading(false)
    }
  }

  return (
    <div className="max-w-xl mx-auto py-10">
      <Card>
        <CardContent className="space-y-4 py-6">
          <h1 className="text-xl font-bold text-center text-green-700">Upload Gallery Images</h1>
          <div className="space-y-2">
            <Label htmlFor="album">Album Name</Label>
            <Input
              id="album"
              value={albumName}
              onChange={(e) => setAlbumName(e.target.value)}
              placeholder="e.g. Spring Wedding 2025"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="images">Select Images</Label>
            <Input
              id="images"
              type="file"
              multiple
              accept="image/*"
              onChange={(e) => setFiles(e.target.files)}
            />
          </div>

          <Button disabled={uploading} onClick={handleUpload}>
            {uploading ? 'Uploading...' : 'Upload Images'}
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}
