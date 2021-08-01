import React, { useCallback, useState } from "react"

type Props = {
  show: boolean
  onClose: () => void
  children: React.ReactNode
}

export const useModal = () => {
  const [isShowing, setIsShowing] = useState(false)
  return {
    isShowing,
    show: useCallback(() => setIsShowing(true), []),
    hide: useCallback(() => setIsShowing(false), []),
  }
}

const Modal: React.VFC<Props> = (props) => {
  return (
    <>
      <div
        onClick={props.onClose}
        className="modal-background"
        data-is-open={props.show}
      ></div>

      <div className="modal-wrapper" data-is-open={props.show}>
        <div role="dialog" className="modal-content">
          {props.children}
        </div>
      </div>
      <style jsx>{`
        .modal-background {
          @apply w-screen h-screen fixed bg-black/25 opacity-0 z-10 pointer-events-none transition-opacity;
        }
        .modal-background[data-is-open="true"] {
          @apply opacity-25 pointer-events-auto;
        }

        .modal-wrapper {
          @apply fixed inset-0 m-auto z-20 px-2 max-w-2xl opacity-0 transition-opacity;
          height: min-content;
          min-height: 15rem;
        }
        .modal-wrapper[data-is-open="true"] {
          @apply opacity-100;
        }

        .modal-content {
          @apply bg-white p-4 rounded;
        }
      `}</style>
    </>
  )
}

export default React.memo(Modal)
