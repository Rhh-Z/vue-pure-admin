export type RouteConfigs = {
  path?: string;
  parentPath?: string;
  meta?: {
    title?: string;
    icon?: string;
    showLink?: boolean;
    savedPosition?: boolean;
  };
};

export const routerArrays: Array<RouteConfigs> = [
  {
    path: "/welcome",
    parentPath: "/",
    meta: {
      title: "message.hshome",
      icon: "el-icon-s-home",
      showLink: true,
      savedPosition: false
    }
  }
];
