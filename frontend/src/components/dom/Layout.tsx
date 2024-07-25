'use client'

const Layout = (props: { children: JSX.Element }) => {

  return (
    <div className="h-svh">
      {props.children}
    </div>
  )
}

export { Layout }
