import React, { PureComponent } from 'react'
import { ProSidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';
import menu from "../assets/menu.png";
import accueil from "../assets/accueil.png" ;
import meselements from "../assets/meselements.png";
import monsolde from "../assets/monsolde.png";
import favoris from "../assets/favoris.png";
export class Sidebar extends PureComponent {
  render() {
    return (
      <div>
<ProSidebar>
  <Menu iconShape="square">
    <MenuItem style={{color:"white" }}><img src={menu} style={{width:'20px' ,margin:'3px'}}/>Menu</MenuItem>
    <MenuItem style={{color: "white"}}><img src={accueil} style={{width:'20px' , margin :'3px'}}/>Accueil</MenuItem>
    <MenuItem style={{color:"white"}}><img src={meselements} style={{width:'20px' , margin :'3px'}}/>Mes éléments</MenuItem>
    <MenuItem style={{color : "white"}}><img src={monsolde} style={{width:'20px' , margin :'3px'}}/> Mon solde </MenuItem>
    <MenuItem style={{color : "white"}}><img src={favoris} style={{width:'20px' , margin :'3px'}}/>Favoris</MenuItem>
  </Menu>
</ProSidebar>;</div>
    )
  }
}
export default Sidebar ; 