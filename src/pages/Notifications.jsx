export default function Notifications({notifications ,setNotifications}) {

function handlenotification(id){
  const change = notifications.map((n)=>(
    n.id==id ? {...n , read:true} : n
  ))
  setNotifications(change);

}
  return (
    <div >
      {notifications.map((n)=>(
        <div key={n.id} onClick={()=>handlenotification(n.id)}>
          <li >{n.message}</li>
        </div>
      ))}
    </div>
  )
}
