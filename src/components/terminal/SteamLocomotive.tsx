'use client'

import React, { useState, useEffect } from 'react'

const TRAIN_ASCII = `
      ====        ________                ___________
  _D _|  |_______/        \\__I_I_____===__|___________|
   |(_)---  |   H\\________/ |   |        =|___ ___|      _________________
   /     |  |   H  |  |     |   |         ||_| |_||     _|                \\_____A
  |      |  |   H  |__--------------------| [___] |   =|                        |
  | ________|___H__/__|_____/[][]~\\_______|       |   -|                        |
  |/ |   |-----------I_____I [][] []  D   |=======|____|________________________|_
__/ =| o |=-~~\\  /~~\\  /~~\\  /~~\\ ____Y___________|__|__________________________|_
 |/-=|___|=    ||    ||    ||    |_____/~\\___/          |_D__D__D_|  |_D__D__D_|
  \\_/      \\O=====O=====O=====O_/      \\_/               \\_/   \\_/    \\_/   \\_/
`

const WHEEL_FRAMES = [
    'O',      // 0°
    '.',      // 45° clockwise
    '-',      // 90°
    '`',      // 135°
    '|',      // 180°
    '\'',     // 225°
    '-',      // 270°
    'o',      // 315°
]
const SMOKE_FRAMES = [
    '    (    )',
    '     (    )',
    '      (    )',
    '     (    )',
    '    (    )',
    '   (    )',
]

export default function SteamLocomotive() {
    const [position, setPosition] = useState(800)
    const [wheelFrame, setWheelFrame] = useState(0)
    const [smokeFrame, setSmokeFrame] = useState(0)

    useEffect(() => {
        const moveInterval = setInterval(() => {
            setPosition((prevPosition) => {
                if (prevPosition < -800) {
                    return 800
                }
                return prevPosition - 5
            })

            setWheelFrame((prevFrame) => (prevFrame + 1) % WHEEL_FRAMES.length)
            setSmokeFrame((prevFrame) => (prevFrame + 1) % SMOKE_FRAMES.length)
        }, 50)

        return () => clearInterval(moveInterval)
    }, [])

    const getTrainWithAnimatedWheels = () => {
        return TRAIN_ASCII.replace(/[O]/g, WHEEL_FRAMES[wheelFrame])
    }

    return (
        <div className="relative h-32 overflow-hidden bg-black">
            <pre
                className="absolute text-[#0F0] whitespace-pre text-xs leading-none font-mono
                   transition-transform duration-500 ease-in-out"
                style={{ left: `${position}px` }}
            >
                {SMOKE_FRAMES[smokeFrame]}
                {getTrainWithAnimatedWheels()}
            </pre>
        </div>
    )
}
