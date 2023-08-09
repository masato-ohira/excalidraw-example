'client only'

// import { MyBox } from '@/components/ui/MyBox'
// import { MyCenter } from '@/components/ui/MyCenter'
// import { MyIcon } from '@/components/icons/MyIcon'
// import { tw } from 'typewind'

// import NoSSR from 'react-no-ssr'
// import clsx from 'clsx'
import { Excalidraw } from '@excalidraw/excalidraw'

export const IndexPage = () => {
  return (
    <>
      <div className={'bg-slate-400 min-h-screen'}>
        <div
          style={{
            height: '100vh',
          }}
        >
          <Excalidraw isCollaborating langCode='ja-JP' />
        </div>
      </div>
    </>
  )
}
