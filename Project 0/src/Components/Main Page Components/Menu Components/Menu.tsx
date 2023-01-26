import { MenuItem } from './MenuItem';
import { IMenuProps, IUserData } from './Menu.types';

export const Menu = ({ data, setSelectedUserDetails }: IMenuProps) => {
  return (
    <>
      {
        data?.map((item: IUserData) => {
          return <MenuItem 
                  key={item.id} 
                  data={item} 
                  setSelectedUserDetails={setSelectedUserDetails} />
        })
      }
    </>
  )
}

