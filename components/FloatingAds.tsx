'use client'

import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'
import { isDevelopment } from '@/lib/utils'

interface FloatingAdsProps {
    pid: string
    slotId: string
    side: 'left' | 'right'
}

const FloatingAds = ({ pid, slotId, side }: FloatingAdsProps) => {
    const [isClient, setIsClient] = useState(false)
    const pathname = usePathname()
    const isDevMode = isDevelopment()

    useEffect(() => {
        setIsClient(true)
        if (!isDevMode) {
            try {
                ; (window.adsbygoogle = window.adsbygoogle || []).push({})
            } catch (err) {
                console.error('AdSense error:', err)
            }
        }
    }, [isDevMode])

    const excludePaths = ['/privacy', '/terms']
    if (excludePaths.includes(pathname)) return null
    if (!isClient) return null

    return (
        <div className="flex flex-col gap-4">
            {isDevMode ? (
                <div className="w-[160px] h-[600px] border flex items-center justify-center bg-gray-100 text-sm">
                    Ad Placeholder<br />160 x 600
                </div>
            ) : (
                <ins
                    className="adsbygoogle block w-[160px] h-[600px]"
                    data-ad-client={`ca-pub-${pid}`}
                    data-ad-slot={slotId}
                    data-ad-format="vertical"
                />
            )}
        </div>
    )
}

export default FloatingAds 