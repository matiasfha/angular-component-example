import angular from 'angular'
import uiRouter from 'angular-ui-router'
import listComponent from './list.component'
import baseTemplate from './base.html'

const RepoResolver = ($http, $q) => {
	"ngInject";
	const deferred = $q.defer()
	const onSuccess = (response) => deferred.resolve(response.data)
	const onFail = (error) => deferred.reject(error)
	$http.get('https://api.github.com/users/msdark/repos').then(onSuccess, onFail);
	return deferred.promise
}

const config = ($stateProvider, $urlRouterProvider) => {
	"ngInject";
	$urlRouterProvider.otherwise('/')
	$stateProvider
		.state('home',{
			url: '/',
			template: baseTemplate,
			controller: 'baseController',
			controllerAs: 'ctrl',
			resolve: {
				repos: RepoResolver
			}
		})
}

const baseController = ($scope, repos) => {
	"ngInject";
	$scope.list = repos.map((item) => {
		return {name: item.name, url: item.html_url}
	})
}


angular
	.module('exampleComponent', [uiRouter])
	.config(config)
	.controller('baseController', baseController)
	.component('listComponent', listComponent)
