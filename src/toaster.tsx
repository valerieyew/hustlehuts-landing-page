import Cross from "./assets/svgs/svgsFiles/Cross"
import React, { ReactElement, ReactNode } from "react"
import { toast as rtoast, ToastContainer, ToastOptions } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import styled from "styled-components"

const ToasterContainer: React.FC<any> = props => {
  const { className } = props
  return (
    <ToastContainer
      className={`${className} mahad`}
      position="top-right"
      autoClose={5000}
      hideProgressBar
      newestOnTop
      closeOnClick
      rtl={false}
      pauseOnFocusLoss={false}
      draggable
      pauseOnHover
      limit={3}
      {...props}
    />
  )
}

const Element: React.FC<any> = ({
  Icon,
  message,
  title: customTitle,
}: {
  Icon?: ReactElement | ReactNode
  message: string
  title?: string
}) => {
  return (
    <div className="toaster-wrap">
      {/* <span className="icon">{<Cross />}</span> */}
      <span className="title-text"> {customTitle}</span>
      <div className="description">{message}</div>
    </div>
  )
}
const error = (
  message: string,
  title?: string,
  options?: ToastOptions,
  Icon?: ReactElement | ReactNode
) => {
  rtoast.error(
    <Element
      type="error"
      message={message}
      title={title}
      Icon={<Cross fill="#f00" />}
    />,
    options
  )
}
const info = (
  message: string,
  title?: string,
  Icon?: ReactElement | ReactNode,
  options?: ToastOptions
) => {
  rtoast.info(
    <Element type="info" message={message} title={title} Icon={<Cross />} />,
    options
  )
}
const success = (
  message: string,
  title?: string,
  Icon?: ReactElement | ReactNode,
  options?: ToastOptions
) => {
  rtoast.success(
    <Element
      type="success"
      message={message}
      title={title}
      Icon={<img src="images/tick.png" alt="tick.svg" />}
    />,
    options
  )
}
const warning = (
  message: string,
  title?: string,
  Icon?: ReactElement | ReactNode,
  options?: ToastOptions
) => {
  rtoast.warning(
    <Element
      type="success"
      message={message}
      title={title}
      Icon={<Cross />}
    />,
    options
  )
}
const save = (
  message: string,
  title?: string,
  Icon?: ReactElement | ReactNode,
  options?: ToastOptions
) => {
  rtoast.success(
    <Element
      message={message}
      title={title || "Recipe Saved"}
      Icon={Icon ?? <img src="images/SaveRecipe.png" alt="heart" />}
    />,
    options
  )
}
const follow = (
  message: string,
  title?: string,
  Icon?: ReactElement | ReactNode,
  options?: ToastOptions
) => {
  rtoast.success(
    <Element
      message={message}
      title={title || "Cook Followed"}
      Icon={<img src="images/userfollow.png" alt="userfollow.svg" />}
    />,
    options
  )
}

export const toast = { error, info, success, warning, save, follow }

export default styled(ToasterContainer)`
`
