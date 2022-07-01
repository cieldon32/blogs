"use strict";(self.webpackChunkstoneDB=self.webpackChunkstoneDB||[]).push([[8116],{3905:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return u}});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=r.createContext({}),p=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},c=function(e){var n=p(e.components);return r.createElement(l.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=p(t),u=o,f=m["".concat(l,".").concat(u)]||m[u]||d[u]||a;return t?r.createElement(f,i(i({ref:n},c),{},{components:t})):r.createElement(f,i({ref:n},c))}));function u(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=m;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var p=2;p<a;p++)i[p]=t[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},18072:function(e,n,t){t.r(n),t.d(n,{assets:function(){return c},contentTitle:function(){return l},default:function(){return u},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return d}});var r=t(87462),o=t(63366),a=(t(67294),t(3905)),i=["components"],s={id:"configuration-parameters",sidebar_position:5.62},l="Configure Parameters",p={unversionedId:"developer-guide/appendix/configuration-parameters",id:"developer-guide/appendix/configuration-parameters",title:"Configure Parameters",description:"By default, all parameters of the StoneDB storage engine are saved in /stonedb/install/stonedb.cnf. Parameters of other storage engines can also be saved in file stonedb.cnf. If you want to modify parameter settings of the StoneDB storage engine, you must modify them in file stonedb.cnf, and then restart the StoneDB instance to make the modification take effect. This is because the StoneDB storage engine supports only static modification of parameter settings, which is different from other storage engines.",source:"@site/docs/04-developer-guide/05-appendix/configuration-parameters.md",sourceDirName:"04-developer-guide/05-appendix",slug:"/developer-guide/appendix/configuration-parameters",permalink:"/docs/developer-guide/appendix/configuration-parameters",draft:!1,editUrl:"https://github.com/stoneatom/stonedb-docs/edit/main/docs/04-developer-guide/05-appendix/configuration-parameters.md",tags:[],version:"current",lastUpdatedBy:"cieldon",lastUpdatedAt:1656656919,formattedLastUpdatedAt:"7/1/2022",sidebarPosition:5.62,frontMatter:{id:"configuration-parameters",sidebar_position:5.62},sidebar:"autoSidebar",previous:{title:"Create and Manage a View",permalink:"/docs/developer-guide/create-and-manage-database-objects/create-and-manage-stored-procedure"},next:{title:"Error Codes",permalink:"/docs/developer-guide/appendix/error-codes"}},c={},d=[],m={toc:d};function u(e){var n=e.components,t=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"configure-parameters"},"Configure Parameters"),(0,a.kt)("p",null,"By default, all parameters of the StoneDB storage engine are saved in ",(0,a.kt)("strong",{parentName:"p"},"/stonedb/install/stonedb.cnf"),". Parameters of other storage engines can also be saved in file ",(0,a.kt)("strong",{parentName:"p"},"stonedb.cnf"),". If you want to modify parameter settings of the StoneDB storage engine, you must modify them in file ",(0,a.kt)("strong",{parentName:"p"},"stonedb.cnf"),", and then restart the StoneDB instance to make the modification take effect. This is because the StoneDB storage engine supports only static modification of parameter settings, which is different from other storage engines."),(0,a.kt)("p",null,"You can configure parameters based on your environment requirements. The following examples show how to configure parameters respectively in a dynamic and static manner."),(0,a.kt)("h1",{id:"example-1-change-the-storage-engine-type"},"Example 1: Change the storage engine type"),(0,a.kt)("p",null,"Parameter ",(0,a.kt)("strong",{parentName:"p"},"default_storage_engine")," specifies the storage engine type. You can dynamically set this parameter at the session level or the global level. However, If the database is restarted, the value of this parameter is restored to the default value. If you want to make a permanent modification, change the value of this parameter in file ",(0,a.kt)("strong",{parentName:"p"},"stonedb.cnf")," and restart the StoneDB instance."),(0,a.kt)("p",null,"Code example of changing the default storage engine:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"# mysql -uroot -p -P3308\nmysql: [Warning] Using a password on the command line interface can be insecure.\nWelcome to the MySQL monitor.  Commands end with ; or \\g.\nYour MySQL connection id is 926\nServer version: 5.7.36-StoneDB-log build-\n\nCopyright (c) 2000, 2022 StoneAtom Group Holding Limited\nNo entry for terminal type \"xterm\";\nusing dumb terminal settings.\nType 'help;' or '\\h' for help. Type '\\c' to clear the current input statement.\n\nmysql> show variables like 'default_storage_engine';\n+------------------------+--------+\n| Variable_name          | Value  |\n+------------------------+--------+\n| default_storage_engine | MyISAM |\n+------------------------+--------+\n1 row in set (0.00 sec)\n\nmysql> set global default_storage_engine=StoneDB;\nQuery OK, 0 rows affected (0.00 sec)\n\nmysql> exit\nBye\n# mysql -uroot -p -P3308\nmysql: [Warning] Using a password on the command line interface can be insecure.\nWelcome to the MySQL monitor.  Commands end with ; or \\g.\nYour MySQL connection id is 927\nServer version: 5.7.36-StoneDB-log build-\n\nCopyright (c) 2000, 2022 StoneAtom Group Holding Limited\nNo entry for terminal type \"xterm\";\nusing dumb terminal settings.\nType 'help;' or '\\h' for help. Type '\\c' to clear the current input statement.\n\nmysql> show variables like 'default_storage_engine';\n+------------------------+---------+\n| Variable_name          | Value   |\n+------------------------+---------+\n| default_storage_engine | STONEDB |\n+------------------------+---------+\n1 row in set (0.00 sec)\n")),(0,a.kt)("p",null,"The default storage engine of the database is modified from ",(0,a.kt)("strong",{parentName:"p"},"MyISAM")," to ",(0,a.kt)("strong",{parentName:"p"},"STONEDB")," at a global level."),(0,a.kt)("p",null,"Code example of restarting the StoneDB instance:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"mysql> shutdown;\nQuery OK, 0 rows affected (0.00 sec)\n\nmysql> exit\nBye\n# mysql -uroot -p -P3308\nmysql: [Warning] Using a password on the command line interface can be insecure.\nWelcome to the MySQL monitor.  Commands end with ; or \\g.\nYour MySQL connection id is 2\nServer version: 5.7.36-StoneDB-log build-\n\nCopyright (c) 2000, 2022 StoneAtom Group Holding Limited\nNo entry for terminal type \"xterm\";\nusing dumb terminal settings.\nType 'help;' or '\\h' for help. Type '\\c' to clear the current input statement.\n\nmysql> show variables like 'default_storage_engine';\n+------------------------+--------+\n| Variable_name          | Value  |\n+------------------------+--------+\n| default_storage_engine | MyISAM |\n+------------------------+--------+\n1 row in set (0.00 sec)\n")),(0,a.kt)("p",null,"After the StoneDB instance is restarted, the value of ",(0,a.kt)("strong",{parentName:"p"},"default_storage_engine")," is restored to ",(0,a.kt)("strong",{parentName:"p"},"MyISAM"),". If you want to make your change persistently effective, edit file ",(0,a.kt)("strong",{parentName:"p"},"stonedb.cnf")," to modify the parameter setting and then restart the StoneDB instance."),(0,a.kt)("h1",{id:"example-2-change-the-insert-buffer-size"},"Example 2: Change the insert buffer size"),(0,a.kt)("p",null,"The parameters of the StoneDB storage engine support only static modification. After the parameter settings are modified, restart the StoneDB instance to make the modification take effect."),(0,a.kt)("p",null,"Code example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"mysql> show variables like 'stonedb_insert_buffer_size';\n+----------------------------+-------+\n| Variable_name              | Value |\n+----------------------------+-------+\n| stonedb_insert_buffer_size | 512   |\n+----------------------------+-------+\n1 row in set (0.00 sec)\n\n# vi /stonedb/install/stonedb.cnf\nstonedb_insert_buffer_size = 1024\n\nmysql> shutdown;\nQuery OK, 0 rows affected (0.00 sec)\n\n# /stonedb/install//bin/mysqld_safe --datadir=/stonedb/install/data/ --user=mysql &\n\n# mysql -uroot -p -P3308\nmysql: [Warning] Using a password on the command line interface can be insecure.\nWelcome to the MySQL monitor.  Commands end with ; or \\g.\nYour MySQL connection id is 2\nServer version: 5.7.36-StoneDB-log build-\n\nCopyright (c) 2000, 2022 StoneAtom Group Holding Limited\nNo entry for terminal type \"xterm\";\nusing dumb terminal settings.\nType 'help;' or '\\h' for help. Type '\\c' to clear the current input statement.\n\nmysql> show variables like 'stonedb_insert_buffer_size';\n+----------------------------+-------+\n| Variable_name              | Value |\n+----------------------------+-------+\n| stonedb_insert_buffer_size | 1024  |\n+----------------------------+-------+\n1 row in set (0.00 sec)\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"stonedb_insert_buffer_size")," is set to 1024 MB."))}u.isMDXComponent=!0}}]);