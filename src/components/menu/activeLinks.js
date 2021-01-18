import { roleSet } from './linkRoleSet';
import activeRole from '../login/activeRole';

const activeLinks = ()=> roleSet[activeRole()];

const activeLinksSet = ()=> new Set (activeLinks());

export {activeLinks, activeLinksSet};