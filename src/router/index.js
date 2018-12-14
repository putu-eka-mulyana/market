import Vue from 'vue'
import Router from 'vue-router'

import detail from '../components/Detail'
import Content from '../components/Content'

Vue.use(Router)

export default new Router({
	routes: [
		{
			path: '/',
			name: 'content',
			component: Content
		},
		{
			path: '/detail',
			name: 'detail',
			component: detail
		}
	]
})
