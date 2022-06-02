export const Header = ({children}) => {
  return(<div style={{backgroundColor: '#202020'}}>{children}</div>)
}
export const Main = ({children}) => {
  return(<div>{children}</div>)
}
export const NavBar = ({children, logo}) => {
  return(
    <div style={{position:'relative', zIndex:2, textAlign:'left'}}>
      <img src={logo} style={{paddingLeft: 30, maxHeight:150, maxWidth: 250, textAlign:'left'}}/>
      <ul style={{listStyleType: 'none', margin:30, padding:0, float: 'right'}}>
        {children}
      </ul>
    </div>)
}
export const NavItem = ({children, link}) => {
  return(<li style={{display: 'inline'}}><a href={link} style={{color: '#F56526', textDecoration: 'none', padding: 10}}><span style={{borderBottom: '2px solid #999'}}>{children}</span></a></li>)
}
export const Hero = ({children, style}) => {
  return(<div style={{...style, clear:'both',position:'relative', zIndex:1, color: '#eee', textAlign:'center', paddingBottom: 70}}>{children}</div>)
}
export const HeroDescription = ({children}) => {
  return(
    <div style={{position:'relative', zIndex: 1,color: '#eee', backgroundColor:'#111', padding: 20}}>
      <div style={{margin:'auto'}}>{children}</div>
    </div>)
}
export const Section = ({children, bgColor}) => {
  return(<div style={{backgroundColor: bgColor}}>{children}</div>)
}
export const PageContent = ({children}) => {
  return(<div style={{textAlign: 'center'}}>{children}</div>)
}
export const Title = ({children}) => {
  return(<h1 style={{fontSize: 72, padding:0, margin:0}}>{children}</h1>)
}
export const ContentTitle = ({children}) => {
  return(<h2 style={{color: '#333', paddingTop: 50}}>{children}</h2>)
}
export const Subtitle = ({children}) => {
  return(<h3 style={{padding:0, margin:0, backgroundColor: '#F34423', width:'fit-content', margin: 'auto', padding: 5, borderRadius: 5}}>{children}</h3>)
}
export const Description = ({children}) => {
  return(<p>{children}</p>)
}
export const ContentDescription = ({children}) => {
  return(<p style={{margin:0}}>{children}</p>)
}
export const Button = ({children, onClick}) => {
  return(<button onClick={onClick} style={{fontSize:16, border: 'none', backgroundColor: '#F56526', color: '#fff', cursor:'pointer', padding: 10, margin: 5, borderRadius: 30}}>{children}</button>)
}
export const Footer = ({children}) => {
  return(<div style={{backgroundColor:'#202020', padding: 50, color:'#eee', textAlign:'center'}}>{children}</div>)
}
export const Logos = ({items}) => {
  return(<div>{items.map(item=><img src={item} style={{maxHeight: 80, maxWidth: 230, margin: 20}}/>)}</div>)
}
export const Cards = ({items}) => {
  return(<div style={{display: 'flex', flexWrap:'wrap', alignItems: 'stretch', maxWidth:items.length*202 > 800 ? 800 : items.length*202, margin:'auto'}} >
      {items.map(item=>{
        return(
            <span  key={item.name} style={{backgroundColor: '#fff',flex:'0 0 200px', marginBottom: 20, marginRight: 'auto', marginLeft: 'auto',border: '1px solid #ccc', boxShadow: '2px 2px 6px 0px  rgba(0,0,0,0.3)'}}>
              <img src={item.avatar} alt={item.name} style={{maxWidth: '100%'}}/>
              <div style={{padding: 10}}>
              <b>{item.name}</b>
              <div><b style={{color:'#555'}}>{item.designation}</b></div>
              <div><small>{item.organization}</small></div>
              </div>
            </span>
        )
      })}
    </div>)
}
