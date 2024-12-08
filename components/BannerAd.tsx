'use client'

import { useEffect, useState } from 'react'
import { isDevelopment } from '@/lib/utils'

interface BannerAdProps {
    pid: string
    slotId: string
}

const BannerAd = ({ pid, slotId }: BannerAdProps) => {
    const [isClient, setIsClient] = useState(false)
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

    if (!isClient) return null

    return (
        <div className="flex justify-center">
            {isDevMode ? (
                <div className="w-full max-w-[896px] h-[250px] border flex items-center justify-center bg-gray-100 text-sm">
                    Ad Placeholder<br />Responsive Banner
                </div>
            ) : (
                <ins
                    className="adsbygoogle block w-full max-w-[896px] h-[250px] overflow-hidden"
                    data-ad-client={`ca-pub-${pid}`}
                    data-ad-slot={slotId}
                    data-ad-format="auto"
                    data-full-width-responsive="true"
                />
            )}
        </div>
    )
}

export default BannerAd 