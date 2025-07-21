'use client'

import { createContext, useContext, useEffect, useState } from 'react'
import { getAuth, onAuthStateChanged, signInAnonymously, User } from 'firebase/auth'
import { app } from '@/lib/firebase'

const AuthContext = createContext<User | null>(null)

export function FirebaseAuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null)

  useEffect(() => {
    const auth = getAuth(app)

    const unsubscribe = onAuthStateChanged(auth, async (firebaseUser) => {
      if (firebaseUser) {
        setUser(firebaseUser)
        console.log("✅ Firebase user ready:", firebaseUser.uid)
      } else {
        try {
          const result = await signInAnonymously(auth)
          setUser(result.user)
          console.log("✅ Signed in anonymously:", result.user.uid)
        } catch (err) {
          console.error("❌ Anonymous sign-in failed", err)
        }
      }
    })

    return () => unsubscribe()
  }, [])

  return <AuthContext.Provider value={user}>{children}</AuthContext.Provider>
}

export function useFirebaseUser() {
  return useContext(AuthContext)
}
