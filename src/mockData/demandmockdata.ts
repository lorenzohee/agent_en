import {mock, Random} from 'mockjs'
import {environment} from '../environments/environment'
import {demands} from './demands'
export class DemandMockData {
    constructor(){
        mock(environment.baseApiPath + '/demands', demands);
        mock(environment.baseApiPath + '/demands/detail?id=1', function(options){
            return {
                "id": 1,
                "title": "为什么Ubuntu 不捆绑Chrome 浏览器?",
                "brief": "The material icon font is the easiest way to incorporate material icons with web projects. We have packaged all the material icons into a single font that takes advantage of the typographic rendering capabilities of modern browsers so that web developers can easily incorporate these icons with only a few lines of code.",
                "username": "凉茶",
                "created_at": "2018-09-01 10:12:21",
                "readed": true
            }
        });
        mock(environment.baseApiPath + '/demands/ignoreDemand', function(options){
            return {id: JSON.parse(options.body).demandId}
        });
        mock(environment.baseApiPath + '/demands/favorite', function(options){
            return {
                id: Random.natural(100, 999)
            }
        });
        mock(environment.baseApiPath + '/demands/unfavorite', function(options){
            return {
                id: parseInt(options.body.split('=')[1])
            }
        });
    }
}