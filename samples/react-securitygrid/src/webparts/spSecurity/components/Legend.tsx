import * as React from 'react';
import { Icon } from 'office-ui-fabric-react/lib/Icon';
import {ISelectedPermission} from "../ISpSecurityWebPartProps";
export interface ILegendProps{
    selectedPermissions:Array<ISelectedPermission>
}
export  function Legend(props: ILegendProps ):JSX.Element {
    debugger;
 
 
  return (<div>
    {
      props.selectedPermissions.map((sp)=><span><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{sp.permission}&nbsp;:&nbsp;</span><span><Icon iconName={sp.iconName}  style={{color:sp.color?sp.color:"FFFFFF"}}  /></span></span> )
    }
  </div>
  );
}