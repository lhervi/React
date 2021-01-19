import { roleSet } from './linkRoleSet';
import activeRole from '../login/activeRole';

const activeLinks = ()=> roleSet[activeRole()];  //Returns an array with the specific links according to the user role

const activeLinksSet = ()=> new Set (activeLinks());

export {activeLinks, activeLinksSet};