

import ViewExistingAlumini from '../Existing Alumini/ViewExistingAlumini/ViewExistingAlumini';
import ViewNewRegistrations from '../NewRegistrations/View New Registrations/ViewNewRegistrations';
import { ExistingAluminTable, NewRegistrationsData } from './../../../Get Contexts and Providers';

export const elementMap:any={
    "New Registrations":{
        Provider:NewRegistrationsData.TableProvider,
        title:"New Registrations",
        ViewComponent:ViewNewRegistrations
    },
    "Existing Alumini":{
        Provider:ExistingAluminTable.TableProvider,
        title:"Existing Alumini",
        ViewComponent:ViewExistingAlumini
    }
}