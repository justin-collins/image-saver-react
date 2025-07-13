import { contextBridge } from 'electron';
import { api } from './database/api/api-register';

contextBridge.exposeInMainWorld('api', api);