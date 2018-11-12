import {mock} from 'mockjs'
import {environment} from '../environments/environment'
export class UserMockData{
    constructor(){
        mock(environment.baseApiPath + '/myinfo', {
            id: 1,
            name: 'liangcha'
        })
    }
}