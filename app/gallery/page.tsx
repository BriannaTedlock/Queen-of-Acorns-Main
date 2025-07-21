'use client'

import { useEffect, useState } from 'react'
import { db } from '@/lib/firebase'
import { collection, getDocs } from 'firebase/firestore'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog'
import Image from 'next/image'
import Footer from '@/components/Footer'
import { Navbar } from '@/components/NavBar'
import { Header } from '@/components/Header'

type Album = {
  id: string
  name: string
  images: string[]
}

export default function GalleryPage() {
  const [albums, setAlbums] = useState<Album[]>([])
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  useEffect(() => {
    const fetchAlbums = async () => {
      const querySnapshot = await getDocs(collection(db, 'albums'))
      const albumList: Album[] = []

      querySnapshot.forEach((doc) => {
        const data = doc.data()
        albumList.push({
          id: doc.id,
          name: data.name,
          images: data.images || [],
        })
      })

      setAlbums(albumList)
    }

    fetchAlbums()
  }, [])

  return (
    <>
      <Header />
      <Navbar />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <h1 className="text-3xl sm:text-4xl font-bold text-center text-[#5a7238] mb-8">Event Gallery</h1>

        <Accordion type="multiple" className="space-y-4">
          {albums.map((album) => (
            <AccordionItem key={album.id} value={album.id} className="border rounded-xl shadow-sm">
              <AccordionTrigger className="px-4 py-3 text-lg sm:text-xl font-semibold bg-[#f5f5f5] text-[#5a7238] hover:bg-[#eef0ea]">
                {album.name}
              </AccordionTrigger>
              <AccordionContent className="p-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                {album.images.map((url, idx) => (
                  <Dialog key={idx}>
                    <DialogTrigger asChild>
                      <Image
                        src={url}
                        alt={`Image ${idx}`}
                        width={300}
                        height={300}
                        className="rounded-md cursor-pointer hover:scale-105 transition-transform duration-300 shadow-md w-full h-auto object-cover"
                        onClick={() => setSelectedImage(url)}
                      />
                    </DialogTrigger>
                    <DialogContent className="flex justify-center items-center max-w-full bg-transparent border-none p-2 sm:p-4">
                      <img
                        src={selectedImage || url}
                        alt="Preview"
                        className="max-h-[90vh] max-w-[90vw] object-contain rounded-md"
                      />
                    </DialogContent>
                  </Dialog>
                ))}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
      <Footer />
    </>
  )
}
