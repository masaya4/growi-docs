(window.webpackJsonp=window.webpackJsonp||[]).push([[136],{447:function(t,a,s){"use strict";s.r(a);var e=s(7),r=Object(e.a)({},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"crowi-オンプレミス-からの移行"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#crowi-オンプレミス-からの移行","aria-hidden":"true"}},[t._v("#")]),t._v(" Crowi (オンプレミス) からの移行")]),t._v(" "),s("h2",{attrs:{id:"概要"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#概要","aria-hidden":"true"}},[t._v("#")]),t._v(" 概要")]),t._v(" "),s("ul",[s("li",[t._v("Crowi オンプレミス "),s("strong",[t._v("v1.6.x")]),t._v(" から、GROWI オンプレミス "),s("strong",[t._v("v3.x")]),t._v(" への移行を想定")]),t._v(" "),s("li",[t._v("MongoDB は既存のものをそのまま利用することを想定")])]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),s("ul",[s("li",[t._v("Redis は既存のものをそのまま利用することを想定、もしくは利用しなくても構わない")]),t._v(" "),s("li",[t._v("GROWI v3.0.7 以降では、"),s("code",[t._v("REDIS_URL")]),t._v(" が設定されていない場合は MongoDB をセッションストアとして利用するため")])])]),t._v(" "),s("div",{staticClass:"custom-block warning"},[s("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),s("ul",[s("li",[t._v("ElasticSearch サーバーは指定バージョンの利用とプラグイン追加が必要")])])]),t._v(" "),s("h2",{attrs:{id:"node-js-実行環境の準備"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#node-js-実行環境の準備","aria-hidden":"true"}},[t._v("#")]),t._v(" Node.js 実行環境の準備")]),t._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"https://github.com/weseek/growi/blob/master/README.md#dependencies",target:"_blank",rel:"noopener noreferrer"}},[t._v("README.md#dependencies"),s("OutboundLink")],1),t._v(" を参考に、Node.js, npm, yarn をセットアップする\n"),s("ul",[s("li",[t._v("Node.js は 10.x にアップグレード")]),t._v(" "),s("li",[t._v("yarn は新規インストール")])])])]),t._v(" "),s("h2",{attrs:{id:"elasticsearch-のバージョンアップ及びプラグイン追加"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#elasticsearch-のバージョンアップ及びプラグイン追加","aria-hidden":"true"}},[t._v("#")]),t._v(" ElasticSearch のバージョンアップ及びプラグイン追加")]),t._v(" "),s("ol",[s("li",[t._v("バージョン 6.6 以上を利用する")]),t._v(" "),s("li",[t._v("以下のプラグインをインストールする\n"),s("ul",[s("li",[s("a",{attrs:{href:"https://www.elastic.co/guide/en/elasticsearch/plugins/current/analysis-kuromoji.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Japanese (kuromoji) Analysis plugin"),s("OutboundLink")],1),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" bin/elasticsearch-plugin "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" analysis-kuromoji\n")])])])]),t._v(" "),s("li",[s("a",{attrs:{href:"https://www.elastic.co/guide/en/elasticsearch/plugins/current/analysis-icu.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("ICU Analysis Plugin"),s("OutboundLink")],1),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" bin/elasticsearch-plugin "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" analysis-icu\n")])])])])])])]),t._v(" "),s("h2",{attrs:{id:"起動手順の変更"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#起動手順の変更","aria-hidden":"true"}},[t._v("#")]),t._v(" 起動手順の変更")]),t._v(" "),s("h3",{attrs:{id:"before"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#before","aria-hidden":"true"}},[t._v("#")]),t._v(" Before")]),t._v(" "),s("h4",{attrs:{id:"事前準備"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#事前準備","aria-hidden":"true"}},[t._v("#")]),t._v(" 事前準備")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# clone")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" clone https://github.com/crowi/crowi.git\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("cd")]),t._v(" crowi\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# install dependencies and build client")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v("\n")])])]),s("h4",{attrs:{id:"起動スクリプト例"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#起動スクリプト例","aria-hidden":"true"}},[t._v("#")]),t._v(" 起動スクリプト例")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("export")]),t._v(" PASSWORD_SEED"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("somesecretstring\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("export")]),t._v(" MONGO_URI"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("mongodb://MONGO_HOST:MONGO_PORT/crowi\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("export")]),t._v(" REDIS_URL"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("redis://REDIS_HOST:REDIS_PORT/crowi\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("export")]),t._v(" ELASTICSEARCH_URI"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("http://ES_HOST:ES_PORT/crowi\nnode app.js\n")])])]),s("h3",{attrs:{id:"after"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#after","aria-hidden":"true"}},[t._v("#")]),t._v(" After")]),t._v(" "),s("h4",{attrs:{id:"事前準備-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#事前準備-2","aria-hidden":"true"}},[t._v("#")]),t._v(" 事前準備")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# clone")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" clone https://github.com/weseek/growi.git\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("cd")]),t._v(" growi\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# install dependencies and build client")]),t._v("\nyarn\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" run build:prod\n")])])]),s("h4",{attrs:{id:"起動スクリプト変更例"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#起動スクリプト変更例","aria-hidden":"true"}},[t._v("#")]),t._v(" 起動スクリプト変更例")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("export")]),t._v(" PASSWORD_SEED"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("somesecretstring                   "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 変更無し")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("export")]),t._v(" MONGO_URI"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("mongodb://MONGO_HOST:MONGO_PORT/crowi  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 変更無し")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("export")]),t._v(" REDIS_URL"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("redis://REDIS_HOST:REDIS_PORT/crowi    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 変更無しまたは削除")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("export")]),t._v(" ELASTICSEARCH_URI"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("http://ES_HOST:ES_PORT/crowi   "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 変更無し")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" run server:prod\n")])])])])},[],!1,null,null,null);a.default=r.exports}}]);