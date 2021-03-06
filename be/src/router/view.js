const views = {
  Login: () => import(/* webpackChunkName: "login" */'@/views/login'),
  Register: () => import(/* webpackChunkName: "login" */'@/views/register'),
  Home: () => import(/* webpackChunkName: "home" */'@/views/home'),
  Dashboard: () => import(/* webpackChunkName: "dashboard" */'@/views/dashboard'),
  Article: () => import(/* webpackChunkName: "article" */'@/views/article'),
  ArticleList: () => import(/* webpackChunkName: "article-list" */'@/views/article-list'),
  FePerformence: () => import(/* webpackChunkName: "fe-performence" */'@/views/performence-fe'),
  ApiPerformence: () => import(/* webpackChunkName: "api-performence" */'@/views/performence-api'),
  ApiLogger: () => import(/* webpackChunkName: "api-logger" */'@/views/logger-api'),
  FeLogger: () => import(/* webpackChunkName: "fe-logger" */'@/views/logger-fe'),
  Ownspace: () => import(/* webpackChunkName: "ownspace" */'@/views/ownspace'),
  Tag: () => import(/* webpackChunkName: "tag" */'@/views/tag'),
  TagList: () => import(/* webpackChunkName: "tag-list" */'@/views/tag-list'),
  Classify: () => import(/* webpackChunkName: "classify" */'@/views/classify'),
  ClassifyList: () => import(/* webpackChunkName: "classify-list" */'@/views/classify-list'),
  UserManagement: () => import(/* webpackChunkName: "user-management" */'@/views/user-management'),
  Forbidden: () => import(/* webpackChunkName: "forbidden" */'@/views/forbidden'),
  NotFound: () => import(/* webpackChunkName: "not-found" */'@/views/not-found'),
  Components: () => import(/* webpackChunkName: "components" */'@/views/components'),
}

export default views
