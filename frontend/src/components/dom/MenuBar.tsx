export const MenuBar = (props: { title: string }) => {
  return (
    <div className="w-full bg-gray-500 p-4">
      <h1 className="font-black">{props.title}</h1>
    </div>
  )
}
