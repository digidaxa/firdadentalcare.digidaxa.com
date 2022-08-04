(function(){
    var script = {
 "start": "this.playAudioList([this.audio_4BB49D9D_5DA1_2882_41D1_9612A5617FDF]); this.init(); this.visibleComponentsIfPlayerFlagEnabled([this.IconButton_507A2FB1_47E1_2C09_41BB_F46A200D03E4], 'cardboardAvailable'); this.visibleComponentsIfPlayerFlagEnabled([this.IconButton_523886F0_47E2_FC06_41A5_8AA1081CECC6], 'gyroscopeAvailable'); this.syncPlaylists([this.ThumbnailList_4C763F5C_5CA2_E983_41D0_590C9E5FED74_playlist,this.mainPlayList]); if(!this.get('fullscreenAvailable')) { [this.IconButton_523876F0_47E2_FC06_41C7_80F55EB340DD].forEach(function(component) { component.set('visible', false); }) }",
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "rootPlayer",
 "children": [
  "this.MainViewer",
  "this.Container_5238D6F0_47E2_FC06_41A9_C9858EC19DBE",
  "this.Container_5E38CD86_51D8_BF28_41D2_5B9D920BE538",
  "this.Container_41F0D818_51C9_8558_41CD_B04C3C608EEC",
  "this.Container_409871BA_51C8_8758_41D1_FADD7686FED9",
  "this.Container_40CC4C31_51CB_FD68_41B0_9E941895D5FB",
  "this.Container_4048C5CB_51C9_8F38_41C7_422DBE214B70",
  "this.Container_4C38E2A3_5CAE_F886_41C2_A1644A8229A4"
 ],
 "scrollBarVisible": "rollOver",
 "overflow": "visible",
 "width": "100%",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "buttonToggleMute": "this.IconButton_523896F0_47E2_FC06_41CE_86406FA85834",
 "paddingLeft": 0,
 "paddingRight": 0,
 "propagateClick": false,
 "minHeight": 20,
 "scrollBarWidth": 10,
 "desktopMipmappingEnabled": false,
 "mobileMipmappingEnabled": false,
 "vrPolyfillScale": 0.5,
 "verticalAlign": "top",
 "minWidth": 20,
 "layout": "absolute",
 "definitions": [{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_4DFC8106_47A6_D40B_41C0_1FA8E4EF6C8E_0/f/0/{row}_{column}.jpg",
      "colCount": 9,
      "class": "TiledImageResourceLevel",
      "width": 4608,
      "tags": "ondemand",
      "rowCount": 9,
      "height": 4608
     },
     {
      "url": "media/panorama_4DFC8106_47A6_D40B_41C0_1FA8E4EF6C8E_0/f/1/{row}_{column}.jpg",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_4DFC8106_47A6_D40B_41C0_1FA8E4EF6C8E_0/f/2/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_4DFC8106_47A6_D40B_41C0_1FA8E4EF6C8E_0/f/3/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_4DFC8106_47A6_D40B_41C0_1FA8E4EF6C8E_0/f/4/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_4DFC8106_47A6_D40B_41C0_1FA8E4EF6C8E_0/u/0/{row}_{column}.jpg",
      "colCount": 9,
      "class": "TiledImageResourceLevel",
      "width": 4608,
      "tags": "ondemand",
      "rowCount": 9,
      "height": 4608
     },
     {
      "url": "media/panorama_4DFC8106_47A6_D40B_41C0_1FA8E4EF6C8E_0/u/1/{row}_{column}.jpg",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_4DFC8106_47A6_D40B_41C0_1FA8E4EF6C8E_0/u/2/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_4DFC8106_47A6_D40B_41C0_1FA8E4EF6C8E_0/u/3/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_4DFC8106_47A6_D40B_41C0_1FA8E4EF6C8E_0/u/4/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_4DFC8106_47A6_D40B_41C0_1FA8E4EF6C8E_0/r/0/{row}_{column}.jpg",
      "colCount": 9,
      "class": "TiledImageResourceLevel",
      "width": 4608,
      "tags": "ondemand",
      "rowCount": 9,
      "height": 4608
     },
     {
      "url": "media/panorama_4DFC8106_47A6_D40B_41C0_1FA8E4EF6C8E_0/r/1/{row}_{column}.jpg",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_4DFC8106_47A6_D40B_41C0_1FA8E4EF6C8E_0/r/2/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_4DFC8106_47A6_D40B_41C0_1FA8E4EF6C8E_0/r/3/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_4DFC8106_47A6_D40B_41C0_1FA8E4EF6C8E_0/r/4/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "levels": [
     {
      "url": "media/panorama_4DFC8106_47A6_D40B_41C0_1FA8E4EF6C8E_0/b/0/{row}_{column}.jpg",
      "colCount": 9,
      "class": "TiledImageResourceLevel",
      "width": 4608,
      "tags": "ondemand",
      "rowCount": 9,
      "height": 4608
     },
     {
      "url": "media/panorama_4DFC8106_47A6_D40B_41C0_1FA8E4EF6C8E_0/b/1/{row}_{column}.jpg",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_4DFC8106_47A6_D40B_41C0_1FA8E4EF6C8E_0/b/2/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_4DFC8106_47A6_D40B_41C0_1FA8E4EF6C8E_0/b/3/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_4DFC8106_47A6_D40B_41C0_1FA8E4EF6C8E_0/b/4/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_4DFC8106_47A6_D40B_41C0_1FA8E4EF6C8E_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_4DFC8106_47A6_D40B_41C0_1FA8E4EF6C8E_0/d/0/{row}_{column}.jpg",
      "colCount": 9,
      "class": "TiledImageResourceLevel",
      "width": 4608,
      "tags": "ondemand",
      "rowCount": 9,
      "height": 4608
     },
     {
      "url": "media/panorama_4DFC8106_47A6_D40B_41C0_1FA8E4EF6C8E_0/d/1/{row}_{column}.jpg",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_4DFC8106_47A6_D40B_41C0_1FA8E4EF6C8E_0/d/2/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_4DFC8106_47A6_D40B_41C0_1FA8E4EF6C8E_0/d/3/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_4DFC8106_47A6_D40B_41C0_1FA8E4EF6C8E_0/d/4/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_4DFC8106_47A6_D40B_41C0_1FA8E4EF6C8E_0/l/0/{row}_{column}.jpg",
      "colCount": 9,
      "class": "TiledImageResourceLevel",
      "width": 4608,
      "tags": "ondemand",
      "rowCount": 9,
      "height": 4608
     },
     {
      "url": "media/panorama_4DFC8106_47A6_D40B_41C0_1FA8E4EF6C8E_0/l/1/{row}_{column}.jpg",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_4DFC8106_47A6_D40B_41C0_1FA8E4EF6C8E_0/l/2/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_4DFC8106_47A6_D40B_41C0_1FA8E4EF6C8E_0/l/3/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_4DFC8106_47A6_D40B_41C0_1FA8E4EF6C8E_0/l/4/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "class": "Panorama",
 "label": "Ruang Periksa",
 "id": "panorama_4DFC8106_47A6_D40B_41C0_1FA8E4EF6C8E",
 "overlays": [
  "this.panorama_4DFC8106_47A6_D40B_41C0_1FA8E4EF6C8E_tcap0",
  "this.overlay_53593422_47E3_3C0A_4182_421976914D4F",
  "this.overlay_404FB659_51CB_E2FD_41C5_249DB9C140F1",
  "this.overlay_408BC2A7_51C8_6255_41AB_08F2437E205F"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": -17.48,
   "distance": 1,
   "backwardYaw": 147.6,
   "panorama": "this.panorama_4DE906F0_47A6_DC06_41BA_81551B734975",
   "class": "AdjacentPanorama"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "cardboardMenu": "this.Menu_75D0186A_61C1_F7F4_41A3_90A31CE24E50",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_4DFC8106_47A6_D40B_41C0_1FA8E4EF6C8E_t.jpg",
 "hfovMax": 130
},
{
 "easing": "quad_in",
 "duration": 400,
 "from": "left",
 "id": "effect_4CD06BFB_5705_AD47_41BD_DD626E481855",
 "class": "SlideInEffect"
},
{
 "items": [
  {
   "media": "this.panorama_4CD2EEC2_47A1_2C0A_41CF_574951DEA940",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 0, 1)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_4CD2EEC2_47A1_2C0A_41CF_574951DEA940_camera"
  },
  {
   "media": "this.panorama_4DF3FD2D_47A1_EC19_41AA_50A600976861",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 1, 2)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_4DF3FD2D_47A1_EC19_41AA_50A600976861_camera"
  },
  {
   "media": "this.panorama_4DF9D6EE_47A1_3C1A_41CC_072E2A82BC5E",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 2, 3)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_4DF9D6EE_47A1_3C1A_41CC_072E2A82BC5E_camera"
  },
  {
   "media": "this.panorama_4DEF3105_47A1_7409_41D0_F0499469C855",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 3, 4)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_4DEF3105_47A1_7409_41D0_F0499469C855_camera"
  },
  {
   "media": "this.panorama_4DF90A77_47A1_5409_41A8_59DA1174DEBE",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 4, 5)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_4DF90A77_47A1_5409_41A8_59DA1174DEBE_camera"
  },
  {
   "media": "this.panorama_4DE906F0_47A6_DC06_41BA_81551B734975",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 5, 6)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_4DE906F0_47A6_DC06_41BA_81551B734975_camera"
  },
  {
   "media": "this.panorama_4DFC8106_47A6_D40B_41C0_1FA8E4EF6C8E",
   "end": "this.trigger('tourEnded')",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 6, 0)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_4DFC8106_47A6_D40B_41C0_1FA8E4EF6C8E_camera"
  }
 ],
 "id": "mainPlayList",
 "class": "PlayList"
},
{
 "initialPosition": {
  "hfov": 80,
  "yaw": 0,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_4DEF3105_47A1_7409_41D0_F0499469C855_camera",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "hfov": 80,
  "yaw": -32.4,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_7504E8DE_61C1_E8CC_41D1_8119B4230405",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "hfov": 80,
  "yaw": -26.17,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_756F7933_61C1_E954_41C4_718BEAD8E2C0",
 "class": "PanoramaCamera"
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_4DE906F0_47A6_DC06_41BA_81551B734975_0/f/0/{row}_{column}.jpg",
      "colCount": 9,
      "class": "TiledImageResourceLevel",
      "width": 4608,
      "tags": "ondemand",
      "rowCount": 9,
      "height": 4608
     },
     {
      "url": "media/panorama_4DE906F0_47A6_DC06_41BA_81551B734975_0/f/1/{row}_{column}.jpg",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_4DE906F0_47A6_DC06_41BA_81551B734975_0/f/2/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_4DE906F0_47A6_DC06_41BA_81551B734975_0/f/3/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_4DE906F0_47A6_DC06_41BA_81551B734975_0/f/4/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_4DE906F0_47A6_DC06_41BA_81551B734975_0/u/0/{row}_{column}.jpg",
      "colCount": 9,
      "class": "TiledImageResourceLevel",
      "width": 4608,
      "tags": "ondemand",
      "rowCount": 9,
      "height": 4608
     },
     {
      "url": "media/panorama_4DE906F0_47A6_DC06_41BA_81551B734975_0/u/1/{row}_{column}.jpg",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_4DE906F0_47A6_DC06_41BA_81551B734975_0/u/2/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_4DE906F0_47A6_DC06_41BA_81551B734975_0/u/3/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_4DE906F0_47A6_DC06_41BA_81551B734975_0/u/4/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_4DE906F0_47A6_DC06_41BA_81551B734975_0/r/0/{row}_{column}.jpg",
      "colCount": 9,
      "class": "TiledImageResourceLevel",
      "width": 4608,
      "tags": "ondemand",
      "rowCount": 9,
      "height": 4608
     },
     {
      "url": "media/panorama_4DE906F0_47A6_DC06_41BA_81551B734975_0/r/1/{row}_{column}.jpg",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_4DE906F0_47A6_DC06_41BA_81551B734975_0/r/2/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_4DE906F0_47A6_DC06_41BA_81551B734975_0/r/3/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_4DE906F0_47A6_DC06_41BA_81551B734975_0/r/4/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "levels": [
     {
      "url": "media/panorama_4DE906F0_47A6_DC06_41BA_81551B734975_0/b/0/{row}_{column}.jpg",
      "colCount": 9,
      "class": "TiledImageResourceLevel",
      "width": 4608,
      "tags": "ondemand",
      "rowCount": 9,
      "height": 4608
     },
     {
      "url": "media/panorama_4DE906F0_47A6_DC06_41BA_81551B734975_0/b/1/{row}_{column}.jpg",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_4DE906F0_47A6_DC06_41BA_81551B734975_0/b/2/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_4DE906F0_47A6_DC06_41BA_81551B734975_0/b/3/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_4DE906F0_47A6_DC06_41BA_81551B734975_0/b/4/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_4DE906F0_47A6_DC06_41BA_81551B734975_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_4DE906F0_47A6_DC06_41BA_81551B734975_0/d/0/{row}_{column}.jpg",
      "colCount": 9,
      "class": "TiledImageResourceLevel",
      "width": 4608,
      "tags": "ondemand",
      "rowCount": 9,
      "height": 4608
     },
     {
      "url": "media/panorama_4DE906F0_47A6_DC06_41BA_81551B734975_0/d/1/{row}_{column}.jpg",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_4DE906F0_47A6_DC06_41BA_81551B734975_0/d/2/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_4DE906F0_47A6_DC06_41BA_81551B734975_0/d/3/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_4DE906F0_47A6_DC06_41BA_81551B734975_0/d/4/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_4DE906F0_47A6_DC06_41BA_81551B734975_0/l/0/{row}_{column}.jpg",
      "colCount": 9,
      "class": "TiledImageResourceLevel",
      "width": 4608,
      "tags": "ondemand",
      "rowCount": 9,
      "height": 4608
     },
     {
      "url": "media/panorama_4DE906F0_47A6_DC06_41BA_81551B734975_0/l/1/{row}_{column}.jpg",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_4DE906F0_47A6_DC06_41BA_81551B734975_0/l/2/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_4DE906F0_47A6_DC06_41BA_81551B734975_0/l/3/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_4DE906F0_47A6_DC06_41BA_81551B734975_0/l/4/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "class": "Panorama",
 "label": "Ruang 2",
 "id": "panorama_4DE906F0_47A6_DC06_41BA_81551B734975",
 "overlays": [
  "this.panorama_4DE906F0_47A6_DC06_41BA_81551B734975_tcap0",
  "this.overlay_539F8CC9_47E3_6C06_41CF_4D2E5EACB307",
  "this.overlay_530F14E9_47E3_DC06_41AE_B0F5CC517E59",
  "this.overlay_40B76EC1_51C9_A3CD_4172_6ACFE3DC79BC",
  "this.overlay_43C5E0AA_51C8_9E5F_41CA_2CE9A3F5DDCB"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": 1.03,
   "distance": 1,
   "backwardYaw": 27.07,
   "panorama": "this.panorama_4DEF3105_47A1_7409_41D0_F0499469C855",
   "class": "AdjacentPanorama"
  },
  {
   "yaw": 147.6,
   "distance": 1,
   "backwardYaw": -17.48,
   "panorama": "this.panorama_4DFC8106_47A6_D40B_41C0_1FA8E4EF6C8E",
   "class": "AdjacentPanorama"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "cardboardMenu": "this.Menu_75D0186A_61C1_F7F4_41A3_90A31CE24E50",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_4DE906F0_47A6_DC06_41BA_81551B734975_t.jpg",
 "hfovMax": 130
},
{
 "initialPosition": {
  "hfov": 80,
  "yaw": 106.08,
  "pitch": -7.27,
  "class": "PanoramaCameraPosition"
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_4DF9D6EE_47A1_3C1A_41CC_072E2A82BC5E_camera",
 "class": "PanoramaCamera"
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_4DEF3105_47A1_7409_41D0_F0499469C855_0/f/0/{row}_{column}.jpg",
      "colCount": 8,
      "class": "TiledImageResourceLevel",
      "width": 4096,
      "tags": "ondemand",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_4DEF3105_47A1_7409_41D0_F0499469C855_0/f/1/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_4DEF3105_47A1_7409_41D0_F0499469C855_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_4DEF3105_47A1_7409_41D0_F0499469C855_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_4DEF3105_47A1_7409_41D0_F0499469C855_0/u/0/{row}_{column}.jpg",
      "colCount": 8,
      "class": "TiledImageResourceLevel",
      "width": 4096,
      "tags": "ondemand",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_4DEF3105_47A1_7409_41D0_F0499469C855_0/u/1/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_4DEF3105_47A1_7409_41D0_F0499469C855_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_4DEF3105_47A1_7409_41D0_F0499469C855_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_4DEF3105_47A1_7409_41D0_F0499469C855_0/r/0/{row}_{column}.jpg",
      "colCount": 8,
      "class": "TiledImageResourceLevel",
      "width": 4096,
      "tags": "ondemand",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_4DEF3105_47A1_7409_41D0_F0499469C855_0/r/1/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_4DEF3105_47A1_7409_41D0_F0499469C855_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_4DEF3105_47A1_7409_41D0_F0499469C855_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "levels": [
     {
      "url": "media/panorama_4DEF3105_47A1_7409_41D0_F0499469C855_0/b/0/{row}_{column}.jpg",
      "colCount": 8,
      "class": "TiledImageResourceLevel",
      "width": 4096,
      "tags": "ondemand",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_4DEF3105_47A1_7409_41D0_F0499469C855_0/b/1/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_4DEF3105_47A1_7409_41D0_F0499469C855_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_4DEF3105_47A1_7409_41D0_F0499469C855_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_4DEF3105_47A1_7409_41D0_F0499469C855_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_4DEF3105_47A1_7409_41D0_F0499469C855_0/d/0/{row}_{column}.jpg",
      "colCount": 8,
      "class": "TiledImageResourceLevel",
      "width": 4096,
      "tags": "ondemand",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_4DEF3105_47A1_7409_41D0_F0499469C855_0/d/1/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_4DEF3105_47A1_7409_41D0_F0499469C855_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_4DEF3105_47A1_7409_41D0_F0499469C855_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_4DEF3105_47A1_7409_41D0_F0499469C855_0/l/0/{row}_{column}.jpg",
      "colCount": 8,
      "class": "TiledImageResourceLevel",
      "width": 4096,
      "tags": "ondemand",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_4DEF3105_47A1_7409_41D0_F0499469C855_0/l/1/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_4DEF3105_47A1_7409_41D0_F0499469C855_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_4DEF3105_47A1_7409_41D0_F0499469C855_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "class": "Panorama",
 "label": "Ruang 1",
 "id": "panorama_4DEF3105_47A1_7409_41D0_F0499469C855",
 "overlays": [
  "this.panorama_4DEF3105_47A1_7409_41D0_F0499469C855_tcap0",
  "this.overlay_53DDA768_47E1_7C07_41C2_588DD9528ED6",
  "this.overlay_535B2152_47E1_D40A_4160_EA48D51D2752",
  "this.overlay_53623FED_47EF_2C19_41C1_4744D1D15BD0",
  "this.overlay_5338899F_47E1_7439_41CA_F2F7C0CE5E23",
  "this.overlay_40D2B9A3_51D7_EE4E_41CA_34D22C3CDEC9",
  "this.overlay_40932496_51C8_A676_41AB_8642A4DEC15D",
  "this.overlay_4C03B73B_5CAF_7986_41D4_F2EBC105164D"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": 27.07,
   "distance": 1,
   "backwardYaw": 1.03,
   "panorama": "this.panorama_4DE906F0_47A6_DC06_41BA_81551B734975",
   "class": "AdjacentPanorama"
  },
  {
   "yaw": 7.42,
   "distance": 1,
   "backwardYaw": -2.29,
   "panorama": "this.panorama_4DF90A77_47A1_5409_41A8_59DA1174DEBE",
   "class": "AdjacentPanorama"
  },
  {
   "yaw": -135.5,
   "distance": 1,
   "backwardYaw": 55.06,
   "panorama": "this.panorama_4DF9D6EE_47A1_3C1A_41CC_072E2A82BC5E",
   "class": "AdjacentPanorama"
  },
  {
   "yaw": 153.83,
   "distance": 1,
   "backwardYaw": 155.51,
   "panorama": "this.panorama_4DF3FD2D_47A1_EC19_41AA_50A600976861",
   "class": "AdjacentPanorama"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "cardboardMenu": "this.Menu_75D0186A_61C1_F7F4_41A3_90A31CE24E50",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_4DEF3105_47A1_7409_41D0_F0499469C855_t.jpg",
 "hfovMax": 130
},
{
 "initialPosition": {
  "hfov": 80,
  "yaw": 177.71,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_75FBD894_61C1_F75C_41C1_0B16255A5EEA",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "hfov": 80,
  "yaw": 3.47,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_757F1925_61C1_E97C_41B4_144092B1C948",
 "class": "PanoramaCamera"
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_4DF9D6EE_47A1_3C1A_41CC_072E2A82BC5E_0/f/0/{row}_{column}.jpg",
      "colCount": 8,
      "class": "TiledImageResourceLevel",
      "width": 4096,
      "tags": "ondemand",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_4DF9D6EE_47A1_3C1A_41CC_072E2A82BC5E_0/f/1/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_4DF9D6EE_47A1_3C1A_41CC_072E2A82BC5E_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_4DF9D6EE_47A1_3C1A_41CC_072E2A82BC5E_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_4DF9D6EE_47A1_3C1A_41CC_072E2A82BC5E_0/u/0/{row}_{column}.jpg",
      "colCount": 8,
      "class": "TiledImageResourceLevel",
      "width": 4096,
      "tags": "ondemand",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_4DF9D6EE_47A1_3C1A_41CC_072E2A82BC5E_0/u/1/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_4DF9D6EE_47A1_3C1A_41CC_072E2A82BC5E_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_4DF9D6EE_47A1_3C1A_41CC_072E2A82BC5E_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_4DF9D6EE_47A1_3C1A_41CC_072E2A82BC5E_0/r/0/{row}_{column}.jpg",
      "colCount": 8,
      "class": "TiledImageResourceLevel",
      "width": 4096,
      "tags": "ondemand",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_4DF9D6EE_47A1_3C1A_41CC_072E2A82BC5E_0/r/1/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_4DF9D6EE_47A1_3C1A_41CC_072E2A82BC5E_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_4DF9D6EE_47A1_3C1A_41CC_072E2A82BC5E_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "levels": [
     {
      "url": "media/panorama_4DF9D6EE_47A1_3C1A_41CC_072E2A82BC5E_0/b/0/{row}_{column}.jpg",
      "colCount": 8,
      "class": "TiledImageResourceLevel",
      "width": 4096,
      "tags": "ondemand",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_4DF9D6EE_47A1_3C1A_41CC_072E2A82BC5E_0/b/1/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_4DF9D6EE_47A1_3C1A_41CC_072E2A82BC5E_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_4DF9D6EE_47A1_3C1A_41CC_072E2A82BC5E_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_4DF9D6EE_47A1_3C1A_41CC_072E2A82BC5E_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_4DF9D6EE_47A1_3C1A_41CC_072E2A82BC5E_0/d/0/{row}_{column}.jpg",
      "colCount": 8,
      "class": "TiledImageResourceLevel",
      "width": 4096,
      "tags": "ondemand",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_4DF9D6EE_47A1_3C1A_41CC_072E2A82BC5E_0/d/1/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_4DF9D6EE_47A1_3C1A_41CC_072E2A82BC5E_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_4DF9D6EE_47A1_3C1A_41CC_072E2A82BC5E_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_4DF9D6EE_47A1_3C1A_41CC_072E2A82BC5E_0/l/0/{row}_{column}.jpg",
      "colCount": 8,
      "class": "TiledImageResourceLevel",
      "width": 4096,
      "tags": "ondemand",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_4DF9D6EE_47A1_3C1A_41CC_072E2A82BC5E_0/l/1/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_4DF9D6EE_47A1_3C1A_41CC_072E2A82BC5E_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_4DF9D6EE_47A1_3C1A_41CC_072E2A82BC5E_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "class": "Panorama",
 "label": "Ruang Tunggu",
 "id": "panorama_4DF9D6EE_47A1_3C1A_41CC_072E2A82BC5E",
 "overlays": [
  "this.panorama_4DF9D6EE_47A1_3C1A_41CC_072E2A82BC5E_tcap0",
  "this.overlay_54000263_47E2_D40A_41D1_76ED0B3A0716",
  "this.overlay_53483717_47E3_5C0A_41A7_B4C777116304",
  "this.overlay_40AE7391_51D9_E24A_41C9_825E7A7CDFFB",
  "this.overlay_4089CE5A_51D8_62FE_41A8_41FDF98221F8",
  "this.overlay_408D8E8C_51D8_A25B_41C3_B9E1ABB389F9",
  "this.overlay_53043377_5CA1_198E_4161_B3067E5C0BF5"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": 55.06,
   "distance": 1,
   "backwardYaw": -135.5,
   "panorama": "this.panorama_4DEF3105_47A1_7409_41D0_F0499469C855",
   "class": "AdjacentPanorama"
  },
  {
   "yaw": 93.18,
   "distance": 1,
   "backwardYaw": 93.42,
   "panorama": "this.panorama_4DF3FD2D_47A1_EC19_41AA_50A600976861",
   "class": "AdjacentPanorama"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "cardboardMenu": "this.Menu_75D0186A_61C1_F7F4_41A3_90A31CE24E50",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_4DF9D6EE_47A1_3C1A_41CC_072E2A82BC5E_t.jpg",
 "hfovMax": 130
},
{
 "displayOriginPosition": {
  "hfov": 165,
  "yaw": -177.48,
  "stereographicFactor": 1,
  "pitch": 90,
  "class": "RotationalCameraDisplayPosition"
 },
 "initialPosition": {
  "hfov": 80,
  "yaw": -177.48,
  "pitch": 9.14,
  "class": "PanoramaCameraPosition"
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_4CD2EEC2_47A1_2C0A_41CF_574951DEA940_camera",
 "displayMovements": [
  {
   "class": "TargetRotationalCameraDisplayMovement",
   "duration": 1000,
   "easing": "linear"
  },
  {
   "easing": "cubic_in_out",
   "duration": 3000,
   "class": "TargetRotationalCameraDisplayMovement",
   "targetHfov": 80,
   "targetStereographicFactor": 0,
   "targetPitch": 9.14
  }
 ],
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "hfov": 80,
  "yaw": 106.52,
  "pitch": -5.69,
  "class": "PanoramaCameraPosition"
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_4DE906F0_47A6_DC06_41BA_81551B734975_camera",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "hfov": 80,
  "yaw": 0,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_4DFC8106_47A6_D40B_41C0_1FA8E4EF6C8E_camera",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "hfov": 80,
  "yaw": -86.58,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_75413917_61C1_E95C_41C5_5102E5EF96D2",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "hfov": 80,
  "yaw": -124.94,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_75F3A8A2_61C1_F774_4183_D9B12C8154A9",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "hfov": 80,
  "yaw": -24.49,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_75EF58B2_61C1_F754_41BA_99BDBB931727",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "hfov": 80,
  "yaw": -178.97,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_75C2C886_61C1_F73C_41C5_F76F00DAF196",
 "class": "PanoramaCamera"
},
{
 "easing": "quad_in",
 "duration": 400,
 "from": "left",
 "id": "effect_4E3E2032_5705_DAC6_41CE_6A6E562AB368",
 "class": "SlideInEffect"
},
{
 "items": [
  {
   "begin": "this.MainViewerMapPlayer.set('movementMode', 'constrained')",
   "media": "this.map_577B714D_47A1_341E_41C4_6907B73ED468",
   "player": "this.MainViewerMapPlayer",
   "class": "MapPlayListItem"
  }
 ],
 "id": "playList_75D8E85B_61C1_F7D4_41C7_7C84EDEA9900",
 "class": "PlayList"
},
{
 "initialPosition": {
  "hfov": 80,
  "yaw": -178.98,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_753468EC_61C1_E8CC_41CD_A703B2E125B8",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "hfov": 80,
  "yaw": -152.93,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_7519C8C1_61C1_F734_41CE_8102C6CBC547",
 "class": "PanoramaCamera"
},
{
 "fieldOfViewOverlayInsideColor": "#FFFFFF",
 "fieldOfViewOverlayInsideOpacity": 0.4,
 "class": "Map",
 "thumbnailUrl": "media/map_577B714D_47A1_341E_41C4_6907B73ED468_t.png",
 "fieldOfViewOverlayRadiusScale": 0.3,
 "fieldOfViewOverlayOutsideOpacity": 0,
 "fieldOfViewOverlayOutsideColor": "#000000",
 "width": 3480,
 "initialZoomFactor": 1,
 "id": "map_577B714D_47A1_341E_41C4_6907B73ED468",
 "image": {
  "levels": [
   {
    "url": "media/map_577B714D_47A1_341E_41C4_6907B73ED468.png",
    "width": 3200,
    "height": 3200,
    "class": "ImageResourceLevel"
   },
   {
    "url": "media/map_577B714D_47A1_341E_41C4_6907B73ED468_lq.png",
    "width": 256,
    "tags": "preload",
    "height": 256,
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "maximumZoomFactor": 1.2,
 "minimumZoomFactor": 0.5,
 "label": "foot",
 "scaleMode": "none",
 "height": 3480
},
{
 "initialPosition": {
  "hfov": 80,
  "yaw": 0,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_4DF90A77_47A1_5409_41A8_59DA1174DEBE_camera",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "hfov": 80,
  "yaw": -176.3,
  "pitch": 5.9,
  "class": "PanoramaCameraPosition"
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_4DF3FD2D_47A1_EC19_41AA_50A600976861_camera",
 "class": "PanoramaCamera"
},
{
 "items": [
  {
   "begin": "this.MainViewerMapPlayer.set('movementMode', 'constrained')",
   "media": "this.map_577B714D_47A1_341E_41C4_6907B73ED468",
   "player": "this.MainViewerMapPlayer",
   "class": "MapPlayListItem"
  }
 ],
 "id": "playList_75D8185B_61C1_F7D4_41C0_428676B8C179",
 "class": "PlayList"
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_4CD2EEC2_47A1_2C0A_41CF_574951DEA940_0/f/0/{row}_{column}.jpg",
      "colCount": 8,
      "class": "TiledImageResourceLevel",
      "width": 4096,
      "tags": "ondemand",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_4CD2EEC2_47A1_2C0A_41CF_574951DEA940_0/f/1/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_4CD2EEC2_47A1_2C0A_41CF_574951DEA940_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_4CD2EEC2_47A1_2C0A_41CF_574951DEA940_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_4CD2EEC2_47A1_2C0A_41CF_574951DEA940_0/u/0/{row}_{column}.jpg",
      "colCount": 8,
      "class": "TiledImageResourceLevel",
      "width": 4096,
      "tags": "ondemand",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_4CD2EEC2_47A1_2C0A_41CF_574951DEA940_0/u/1/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_4CD2EEC2_47A1_2C0A_41CF_574951DEA940_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_4CD2EEC2_47A1_2C0A_41CF_574951DEA940_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_4CD2EEC2_47A1_2C0A_41CF_574951DEA940_0/r/0/{row}_{column}.jpg",
      "colCount": 8,
      "class": "TiledImageResourceLevel",
      "width": 4096,
      "tags": "ondemand",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_4CD2EEC2_47A1_2C0A_41CF_574951DEA940_0/r/1/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_4CD2EEC2_47A1_2C0A_41CF_574951DEA940_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_4CD2EEC2_47A1_2C0A_41CF_574951DEA940_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "levels": [
     {
      "url": "media/panorama_4CD2EEC2_47A1_2C0A_41CF_574951DEA940_0/b/0/{row}_{column}.jpg",
      "colCount": 8,
      "class": "TiledImageResourceLevel",
      "width": 4096,
      "tags": "ondemand",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_4CD2EEC2_47A1_2C0A_41CF_574951DEA940_0/b/1/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_4CD2EEC2_47A1_2C0A_41CF_574951DEA940_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_4CD2EEC2_47A1_2C0A_41CF_574951DEA940_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_4CD2EEC2_47A1_2C0A_41CF_574951DEA940_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_4CD2EEC2_47A1_2C0A_41CF_574951DEA940_0/d/0/{row}_{column}.jpg",
      "colCount": 8,
      "class": "TiledImageResourceLevel",
      "width": 4096,
      "tags": "ondemand",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_4CD2EEC2_47A1_2C0A_41CF_574951DEA940_0/d/1/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_4CD2EEC2_47A1_2C0A_41CF_574951DEA940_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_4CD2EEC2_47A1_2C0A_41CF_574951DEA940_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_4CD2EEC2_47A1_2C0A_41CF_574951DEA940_0/l/0/{row}_{column}.jpg",
      "colCount": 8,
      "class": "TiledImageResourceLevel",
      "width": 4096,
      "tags": "ondemand",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_4CD2EEC2_47A1_2C0A_41CF_574951DEA940_0/l/1/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_4CD2EEC2_47A1_2C0A_41CF_574951DEA940_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_4CD2EEC2_47A1_2C0A_41CF_574951DEA940_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "class": "Panorama",
 "label": "Outdoor",
 "id": "panorama_4CD2EEC2_47A1_2C0A_41CF_574951DEA940",
 "overlays": [
  "this.panorama_4CD2EEC2_47A1_2C0A_41CF_574951DEA940_tcap0",
  "this.overlay_531AE71F_47E1_3C3A_41BB_C2BDB13C1FD3"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": -176.53,
   "distance": 1,
   "backwardYaw": 1.02,
   "panorama": "this.panorama_4DF3FD2D_47A1_EC19_41AA_50A600976861",
   "class": "AdjacentPanorama"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "cardboardMenu": "this.Menu_75D0186A_61C1_F7F4_41A3_90A31CE24E50",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_4CD2EEC2_47A1_2C0A_41CF_574951DEA940_t.jpg",
 "hfovMax": 130
},
{
 "initialPosition": {
  "hfov": 80,
  "yaw": -172.58,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_7523F8FA_61C1_E8D4_41D5_C12A3810D59B",
 "class": "PanoramaCamera"
},
{
 "fontColor": "#FFFFFF",
 "rollOverBackgroundColor": "#000000",
 "class": "Menu",
 "children": [
  {
   "label": "Outdoor",
   "click": "this.mainPlayList.set('selectedIndex', 0)",
   "class": "MenuItem"
  },
  {
   "label": "Pintu Utama",
   "click": "this.mainPlayList.set('selectedIndex', 1)",
   "class": "MenuItem"
  },
  {
   "label": "Ruang Tunggu",
   "click": "this.mainPlayList.set('selectedIndex', 2)",
   "class": "MenuItem"
  },
  {
   "label": "Ruang 1",
   "click": "this.mainPlayList.set('selectedIndex', 3)",
   "class": "MenuItem"
  },
  {
   "label": "Resepsionis",
   "click": "this.mainPlayList.set('selectedIndex', 4)",
   "class": "MenuItem"
  },
  {
   "label": "Ruang 2",
   "click": "this.mainPlayList.set('selectedIndex', 5)",
   "class": "MenuItem"
  },
  {
   "label": "Ruang Periksa",
   "click": "this.mainPlayList.set('selectedIndex', 6)",
   "class": "MenuItem"
  }
 ],
 "label": "Media",
 "id": "Menu_75D0186A_61C1_F7F4_41A3_90A31CE24E50",
 "opacity": 0.4,
 "fontFamily": "Arial",
 "selectedFontColor": "#FFFFFF",
 "rollOverOpacity": 0.8,
 "selectedBackgroundColor": "#202020",
 "backgroundColor": "#404040",
 "rollOverFontColor": "#FFFFFF"
},
{
 "initialPosition": {
  "hfov": 80,
  "yaw": 44.5,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_7551E909_61C1_E934_41D6_46763DA35ACF",
 "class": "PanoramaCamera"
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_4DF90A77_47A1_5409_41A8_59DA1174DEBE_0/f/0/{row}_{column}.jpg",
      "colCount": 9,
      "class": "TiledImageResourceLevel",
      "width": 4608,
      "tags": "ondemand",
      "rowCount": 9,
      "height": 4608
     },
     {
      "url": "media/panorama_4DF90A77_47A1_5409_41A8_59DA1174DEBE_0/f/1/{row}_{column}.jpg",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_4DF90A77_47A1_5409_41A8_59DA1174DEBE_0/f/2/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_4DF90A77_47A1_5409_41A8_59DA1174DEBE_0/f/3/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_4DF90A77_47A1_5409_41A8_59DA1174DEBE_0/f/4/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_4DF90A77_47A1_5409_41A8_59DA1174DEBE_0/u/0/{row}_{column}.jpg",
      "colCount": 9,
      "class": "TiledImageResourceLevel",
      "width": 4608,
      "tags": "ondemand",
      "rowCount": 9,
      "height": 4608
     },
     {
      "url": "media/panorama_4DF90A77_47A1_5409_41A8_59DA1174DEBE_0/u/1/{row}_{column}.jpg",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_4DF90A77_47A1_5409_41A8_59DA1174DEBE_0/u/2/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_4DF90A77_47A1_5409_41A8_59DA1174DEBE_0/u/3/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_4DF90A77_47A1_5409_41A8_59DA1174DEBE_0/u/4/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_4DF90A77_47A1_5409_41A8_59DA1174DEBE_0/r/0/{row}_{column}.jpg",
      "colCount": 9,
      "class": "TiledImageResourceLevel",
      "width": 4608,
      "tags": "ondemand",
      "rowCount": 9,
      "height": 4608
     },
     {
      "url": "media/panorama_4DF90A77_47A1_5409_41A8_59DA1174DEBE_0/r/1/{row}_{column}.jpg",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_4DF90A77_47A1_5409_41A8_59DA1174DEBE_0/r/2/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_4DF90A77_47A1_5409_41A8_59DA1174DEBE_0/r/3/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_4DF90A77_47A1_5409_41A8_59DA1174DEBE_0/r/4/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "levels": [
     {
      "url": "media/panorama_4DF90A77_47A1_5409_41A8_59DA1174DEBE_0/b/0/{row}_{column}.jpg",
      "colCount": 9,
      "class": "TiledImageResourceLevel",
      "width": 4608,
      "tags": "ondemand",
      "rowCount": 9,
      "height": 4608
     },
     {
      "url": "media/panorama_4DF90A77_47A1_5409_41A8_59DA1174DEBE_0/b/1/{row}_{column}.jpg",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_4DF90A77_47A1_5409_41A8_59DA1174DEBE_0/b/2/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_4DF90A77_47A1_5409_41A8_59DA1174DEBE_0/b/3/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_4DF90A77_47A1_5409_41A8_59DA1174DEBE_0/b/4/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_4DF90A77_47A1_5409_41A8_59DA1174DEBE_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_4DF90A77_47A1_5409_41A8_59DA1174DEBE_0/d/0/{row}_{column}.jpg",
      "colCount": 9,
      "class": "TiledImageResourceLevel",
      "width": 4608,
      "tags": "ondemand",
      "rowCount": 9,
      "height": 4608
     },
     {
      "url": "media/panorama_4DF90A77_47A1_5409_41A8_59DA1174DEBE_0/d/1/{row}_{column}.jpg",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_4DF90A77_47A1_5409_41A8_59DA1174DEBE_0/d/2/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_4DF90A77_47A1_5409_41A8_59DA1174DEBE_0/d/3/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_4DF90A77_47A1_5409_41A8_59DA1174DEBE_0/d/4/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_4DF90A77_47A1_5409_41A8_59DA1174DEBE_0/l/0/{row}_{column}.jpg",
      "colCount": 9,
      "class": "TiledImageResourceLevel",
      "width": 4608,
      "tags": "ondemand",
      "rowCount": 9,
      "height": 4608
     },
     {
      "url": "media/panorama_4DF90A77_47A1_5409_41A8_59DA1174DEBE_0/l/1/{row}_{column}.jpg",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_4DF90A77_47A1_5409_41A8_59DA1174DEBE_0/l/2/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_4DF90A77_47A1_5409_41A8_59DA1174DEBE_0/l/3/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_4DF90A77_47A1_5409_41A8_59DA1174DEBE_0/l/4/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "class": "Panorama",
 "label": "Resepsionis",
 "id": "panorama_4DF90A77_47A1_5409_41A8_59DA1174DEBE",
 "overlays": [
  "this.panorama_4DF90A77_47A1_5409_41A8_59DA1174DEBE_tcap0",
  "this.overlay_53E8DDA7_47EF_EC0A_41B5_E44B17A6481C",
  "this.overlay_530446E3_47E2_DC0A_41B2_A74CF2BAB086",
  "this.overlay_40A5386D_51C8_AED5_41D3_42F8A72A5AE7",
  "this.overlay_409B067E_51C8_62B6_41A8_091850AE2E69",
  "this.overlay_53406EE0_5CA7_6882_41D6_1A3E72EC5FBC"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": -2.29,
   "distance": 1,
   "backwardYaw": 7.42,
   "panorama": "this.panorama_4DEF3105_47A1_7409_41D0_F0499469C855",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_4DE906F0_47A6_DC06_41BA_81551B734975",
   "class": "AdjacentPanorama"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "cardboardMenu": "this.Menu_75D0186A_61C1_F7F4_41A3_90A31CE24E50",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_4DF90A77_47A1_5409_41A8_59DA1174DEBE_t.jpg",
 "hfovMax": 130
},
{
 "buttonToggleGyroscope": "this.IconButton_523886F0_47E2_FC06_41A5_8AA1081CECC6",
 "gyroscopeEnabled": true,
 "displayPlaybackBar": true,
 "buttonCardboardView": "this.IconButton_507A2FB1_47E1_2C09_41BB_F46A200D03E4",
 "class": "PanoramaPlayer",
 "viewerArea": "this.MainViewer",
 "gyroscopeVerticalDraggingEnabled": true,
 "id": "MainViewerPanoramaPlayer",
 "touchControlMode": "drag_rotation",
 "mouseControlMode": "drag_acceleration"
},
{
 "items": [
  {
   "media": "this.panorama_4CD2EEC2_47A1_2C0A_41CF_574951DEA940",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_4C763F5C_5CA2_E983_41D0_590C9E5FED74_playlist, 0, 1)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_4CD2EEC2_47A1_2C0A_41CF_574951DEA940_camera"
  },
  {
   "media": "this.panorama_4DF3FD2D_47A1_EC19_41AA_50A600976861",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_4C763F5C_5CA2_E983_41D0_590C9E5FED74_playlist, 1, 2)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_4DF3FD2D_47A1_EC19_41AA_50A600976861_camera"
  },
  {
   "media": "this.panorama_4DF9D6EE_47A1_3C1A_41CC_072E2A82BC5E",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_4C763F5C_5CA2_E983_41D0_590C9E5FED74_playlist, 2, 3)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_4DF9D6EE_47A1_3C1A_41CC_072E2A82BC5E_camera"
  },
  {
   "media": "this.panorama_4DEF3105_47A1_7409_41D0_F0499469C855",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_4C763F5C_5CA2_E983_41D0_590C9E5FED74_playlist, 3, 4)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_4DEF3105_47A1_7409_41D0_F0499469C855_camera"
  },
  {
   "media": "this.panorama_4DF90A77_47A1_5409_41A8_59DA1174DEBE",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_4C763F5C_5CA2_E983_41D0_590C9E5FED74_playlist, 4, 5)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_4DF90A77_47A1_5409_41A8_59DA1174DEBE_camera"
  },
  {
   "media": "this.panorama_4DE906F0_47A6_DC06_41BA_81551B734975",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_4C763F5C_5CA2_E983_41D0_590C9E5FED74_playlist, 5, 6)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_4DE906F0_47A6_DC06_41BA_81551B734975_camera"
  },
  {
   "media": "this.panorama_4DFC8106_47A6_D40B_41C0_1FA8E4EF6C8E",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_4C763F5C_5CA2_E983_41D0_590C9E5FED74_playlist, 6, 0)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_4DFC8106_47A6_D40B_41C0_1FA8E4EF6C8E_camera"
  }
 ],
 "id": "ThumbnailList_4C763F5C_5CA2_E983_41D0_590C9E5FED74_playlist",
 "class": "PlayList"
},
{
 "easing": "quad_in",
 "duration": 400,
 "id": "effect_62AD73E7_74A7_9CF6_41C5_55E9CFDD3B7E",
 "to": "left",
 "class": "SlideOutEffect"
},
{
 "initialPosition": {
  "hfov": 80,
  "yaw": 162.52,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_7516F8CF_61C1_E8CC_41CB_2C23106C1D3D",
 "class": "PanoramaCamera"
},
{
 "viewerArea": "this.MainViewer",
 "id": "MainViewerMapPlayer",
 "movementMode": "constrained",
 "class": "MapPlayer"
},
{
 "autoplay": true,
 "audio": {
  "oggUrl": "media/audio_4BB49D9D_5DA1_2882_41D1_9612A5617FDF.ogg",
  "mp3Url": "media/audio_4BB49D9D_5DA1_2882_41D1_9612A5617FDF.mp3",
  "class": "AudioResource"
 },
 "id": "audio_4BB49D9D_5DA1_2882_41D1_9612A5617FDF",
 "data": {
  "label": "Forest Lullabye - Asher Fulero"
 },
 "class": "MediaAudio"
},
{
 "initialPosition": {
  "hfov": 80,
  "yaw": -86.82,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_749D5942_61C1_E934_41AD_698C7FF52712",
 "class": "PanoramaCamera"
},
{
 "easing": "quad_in",
 "duration": 400,
 "id": "effect_4DE9D19D_5705_5DFD_41C8_A84F2FF661E6",
 "to": "left",
 "class": "SlideOutEffect"
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_4DF3FD2D_47A1_EC19_41AA_50A600976861_0/f/0/{row}_{column}.jpg",
      "colCount": 9,
      "class": "TiledImageResourceLevel",
      "width": 4608,
      "tags": "ondemand",
      "rowCount": 9,
      "height": 4608
     },
     {
      "url": "media/panorama_4DF3FD2D_47A1_EC19_41AA_50A600976861_0/f/1/{row}_{column}.jpg",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_4DF3FD2D_47A1_EC19_41AA_50A600976861_0/f/2/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_4DF3FD2D_47A1_EC19_41AA_50A600976861_0/f/3/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_4DF3FD2D_47A1_EC19_41AA_50A600976861_0/f/4/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_4DF3FD2D_47A1_EC19_41AA_50A600976861_0/u/0/{row}_{column}.jpg",
      "colCount": 9,
      "class": "TiledImageResourceLevel",
      "width": 4608,
      "tags": "ondemand",
      "rowCount": 9,
      "height": 4608
     },
     {
      "url": "media/panorama_4DF3FD2D_47A1_EC19_41AA_50A600976861_0/u/1/{row}_{column}.jpg",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_4DF3FD2D_47A1_EC19_41AA_50A600976861_0/u/2/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_4DF3FD2D_47A1_EC19_41AA_50A600976861_0/u/3/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_4DF3FD2D_47A1_EC19_41AA_50A600976861_0/u/4/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_4DF3FD2D_47A1_EC19_41AA_50A600976861_0/r/0/{row}_{column}.jpg",
      "colCount": 9,
      "class": "TiledImageResourceLevel",
      "width": 4608,
      "tags": "ondemand",
      "rowCount": 9,
      "height": 4608
     },
     {
      "url": "media/panorama_4DF3FD2D_47A1_EC19_41AA_50A600976861_0/r/1/{row}_{column}.jpg",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_4DF3FD2D_47A1_EC19_41AA_50A600976861_0/r/2/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_4DF3FD2D_47A1_EC19_41AA_50A600976861_0/r/3/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_4DF3FD2D_47A1_EC19_41AA_50A600976861_0/r/4/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "levels": [
     {
      "url": "media/panorama_4DF3FD2D_47A1_EC19_41AA_50A600976861_0/b/0/{row}_{column}.jpg",
      "colCount": 9,
      "class": "TiledImageResourceLevel",
      "width": 4608,
      "tags": "ondemand",
      "rowCount": 9,
      "height": 4608
     },
     {
      "url": "media/panorama_4DF3FD2D_47A1_EC19_41AA_50A600976861_0/b/1/{row}_{column}.jpg",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_4DF3FD2D_47A1_EC19_41AA_50A600976861_0/b/2/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_4DF3FD2D_47A1_EC19_41AA_50A600976861_0/b/3/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_4DF3FD2D_47A1_EC19_41AA_50A600976861_0/b/4/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_4DF3FD2D_47A1_EC19_41AA_50A600976861_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_4DF3FD2D_47A1_EC19_41AA_50A600976861_0/d/0/{row}_{column}.jpg",
      "colCount": 9,
      "class": "TiledImageResourceLevel",
      "width": 4608,
      "tags": "ondemand",
      "rowCount": 9,
      "height": 4608
     },
     {
      "url": "media/panorama_4DF3FD2D_47A1_EC19_41AA_50A600976861_0/d/1/{row}_{column}.jpg",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_4DF3FD2D_47A1_EC19_41AA_50A600976861_0/d/2/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_4DF3FD2D_47A1_EC19_41AA_50A600976861_0/d/3/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_4DF3FD2D_47A1_EC19_41AA_50A600976861_0/d/4/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_4DF3FD2D_47A1_EC19_41AA_50A600976861_0/l/0/{row}_{column}.jpg",
      "colCount": 9,
      "class": "TiledImageResourceLevel",
      "width": 4608,
      "tags": "ondemand",
      "rowCount": 9,
      "height": 4608
     },
     {
      "url": "media/panorama_4DF3FD2D_47A1_EC19_41AA_50A600976861_0/l/1/{row}_{column}.jpg",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_4DF3FD2D_47A1_EC19_41AA_50A600976861_0/l/2/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_4DF3FD2D_47A1_EC19_41AA_50A600976861_0/l/3/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_4DF3FD2D_47A1_EC19_41AA_50A600976861_0/l/4/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "class": "Panorama",
 "label": "Pintu Utama",
 "id": "panorama_4DF3FD2D_47A1_EC19_41AA_50A600976861",
 "overlays": [
  "this.panorama_4DF3FD2D_47A1_EC19_41AA_50A600976861_tcap0",
  "this.overlay_54099632_47E7_3C0B_41C3_71EE82BC5967",
  "this.overlay_533C8AD0_47E1_D406_41C6_E1FDC1AD17FC",
  "this.overlay_52D8769F_47E1_3C39_41C7_301285E8871B",
  "this.overlay_5CACFE97_51C8_BD28_41CF_AF42DEC7C61C",
  "this.overlay_5FA050FF_51C8_86D8_4192_BD807DFCD952",
  "this.overlay_5F401F45_51C9_9B28_41A9_CFC0EAD7428A",
  "this.overlay_537A42D5_5CA6_F882_41D3_11CC373C7347",
  "this.overlay_4F9061D9_5CA1_3882_41D4_B0136C0C5A07"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": 1.02,
   "distance": 1,
   "backwardYaw": -176.53,
   "panorama": "this.panorama_4CD2EEC2_47A1_2C0A_41CF_574951DEA940",
   "class": "AdjacentPanorama"
  },
  {
   "yaw": 155.51,
   "distance": 1,
   "backwardYaw": 153.83,
   "panorama": "this.panorama_4DEF3105_47A1_7409_41D0_F0499469C855",
   "class": "AdjacentPanorama"
  },
  {
   "yaw": 93.42,
   "distance": 1,
   "backwardYaw": 93.18,
   "panorama": "this.panorama_4DF9D6EE_47A1_3C1A_41CC_072E2A82BC5E",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_4DE906F0_47A6_DC06_41BA_81551B734975",
   "class": "AdjacentPanorama"
  }
 ],
 "hfov": 360,
 "pitch": -4.78,
 "cardboardMenu": "this.Menu_75D0186A_61C1_F7F4_41A3_90A31CE24E50",
 "vfov": 169.5,
 "thumbnailUrl": "media/panorama_4DF3FD2D_47A1_EC19_41AA_50A600976861_t.jpg",
 "hfovMax": 130
},
{
 "progressBarBorderSize": 0,
 "id": "MainViewer",
 "width": "100%",
 "playbackBarProgressBorderRadius": 0,
 "progressBarBorderRadius": 0,
 "toolTipShadowOpacity": 1,
 "playbackBarBorderRadius": 0,
 "toolTipFontStyle": "normal",
 "playbackBarHeadShadowVerticalLength": 0,
 "paddingLeft": 0,
 "playbackBarProgressBorderColor": "#000000",
 "minHeight": 50,
 "toolTipFontFamily": "Calibri",
 "playbackBarHeadBorderColor": "#000000",
 "toolTipTextShadowOpacity": 0,
 "playbackBarHeadBorderRadius": 0,
 "progressLeft": 0,
 "propagateClick": false,
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "playbackBarBorderSize": 0,
 "toolTipShadowVerticalLength": 0,
 "minWidth": 100,
 "playbackBarBackgroundOpacity": 1,
 "height": "100%",
 "class": "ViewerArea",
 "toolTipFontColor": "#606060",
 "transitionDuration": 500,
 "vrPointerSelectionColor": "#FF6600",
 "toolTipBackgroundColor": "#F6F6F6",
 "toolTipShadowHorizontalLength": 0,
 "playbackBarHeadShadowColor": "#000000",
 "borderSize": 0,
 "progressRight": 0,
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "vrPointerSelectionTime": 2000,
 "progressBarBackgroundColorDirection": "vertical",
 "progressBottom": 0,
 "progressHeight": 10,
 "playbackBarHeadShadow": true,
 "shadow": false,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#00CC99"
 ],
 "playbackBarOpacity": 1,
 "toolTipPaddingRight": 6,
 "playbackBarHeadShadowOpacity": 0.7,
 "toolTipBorderSize": 1,
 "toolTipPaddingLeft": 6,
 "toolTipPaddingTop": 4,
 "vrPointerColor": "#FFFFFF",
 "toolTipDisplayTime": 600,
 "progressBarOpacity": 1,
 "playbackBarBorderColor": "#FFFFFF",
 "progressBorderSize": 0,
 "transitionMode": "blending",
 "displayTooltipInTouchScreens": true,
 "toolTipBorderRadius": 3,
 "borderRadius": 0,
 "progressBorderRadius": 0,
 "paddingRight": 0,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "playbackBarLeft": 0,
 "progressBackgroundColorRatios": [
  0
 ],
 "playbackBarHeadHeight": 15,
 "playbackBarHeadShadowBlurRadius": 3,
 "playbackBarHeadShadowHorizontalLength": 0,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "progressBarBorderColor": "#000000",
 "toolTipBorderColor": "#767676",
 "progressBarBackgroundColorRatios": [
  0
 ],
 "progressBackgroundColorDirection": "vertical",
 "toolTipShadowSpread": 0,
 "toolTipShadowBlurRadius": 3,
 "playbackBarBottom": 5,
 "toolTipTextShadowColor": "#000000",
 "toolTipOpacity": 1,
 "playbackBarHeadOpacity": 1,
 "progressBarBackgroundColor": [
  "#C7D789"
 ],
 "paddingTop": 0,
 "progressBorderColor": "#000000",
 "toolTipPaddingBottom": 4,
 "paddingBottom": 0,
 "toolTipFontSize": "20vmin",
 "toolTipTextShadowBlurRadius": 3,
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "toolTipShadowColor": "#333333",
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "data": {
  "name": "Main Viewer"
 },
 "playbackBarHeight": 10,
 "playbackBarHeadWidth": 6,
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipFontWeight": "normal",
 "playbackBarProgressBorderSize": 0,
 "playbackBarRight": 0
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_5238D6F0_47E2_FC06_41A9_C9858EC19DBE",
 "backgroundOpacity": 0,
 "width": 330,
 "scrollBarVisible": "rollOver",
 "left": "0%",
 "overflow": "scroll",
 "children": [
  "this.Container_523AD6EF_47E2_FC1A_4181_012BF248BFA6",
  "this.Container_523AE6EF_47E2_FC1A_41C8_023AA8332FE8"
 ],
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 1,
 "propagateClick": false,
 "top": "0%",
 "verticalAlign": "top",
 "height": "100%",
 "minWidth": 1,
 "layout": "absolute",
 "scrollBarWidth": 10,
 "class": "Container",
 "borderSize": 0,
 "paddingTop": 0,
 "paddingBottom": 0,
 "gap": 10,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "--- LEFT PANEL 2"
 },
 "shadow": false
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_5E38CD86_51D8_BF28_41D2_5B9D920BE538",
 "backgroundOpacity": 0.29,
 "children": [
  "this.Label_5E57C284_51D9_8528_41D0_0FB66DAB6C9E"
 ],
 "scrollBarVisible": "rollOver",
 "left": "0%",
 "overflow": "scroll",
 "width": "100%",
 "scrollBarMargin": 2,
 "paddingRight": 0,
 "paddingLeft": 0,
 "borderRadius": 0,
 "backgroundColorRatios": [
  1
 ],
 "propagateClick": false,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "top": "0%",
 "backgroundColor": [
  "#000000"
 ],
 "verticalAlign": "top",
 "minWidth": 1,
 "layout": "absolute",
 "height": "100%",
 "class": "Container",
 "borderSize": 0,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "gap": 10,
 "contentOpaque": true,
 "scrollBarColor": "#000000",
 "data": {
  "name": "Ruang Tunggu"
 },
 "shadow": false,
 "visible": false
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_41F0D818_51C9_8558_41CD_B04C3C608EEC",
 "backgroundOpacity": 0.29,
 "children": [
  "this.Label_43D097B3_51C9_8B68_41B9_9292C8860CAD"
 ],
 "scrollBarVisible": "rollOver",
 "left": "0%",
 "overflow": "scroll",
 "width": "100%",
 "scrollBarMargin": 2,
 "paddingRight": 0,
 "paddingLeft": 0,
 "borderRadius": 0,
 "backgroundColorRatios": [
  1
 ],
 "propagateClick": false,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "top": "0%",
 "backgroundColor": [
  "#000000"
 ],
 "verticalAlign": "top",
 "minWidth": 1,
 "layout": "absolute",
 "height": "100%",
 "class": "Container",
 "borderSize": 0,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "gap": 10,
 "contentOpaque": true,
 "scrollBarColor": "#000000",
 "data": {
  "name": "Toilet"
 },
 "shadow": false,
 "visible": false
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_409871BA_51C8_8758_41D1_FADD7686FED9",
 "backgroundOpacity": 0.29,
 "children": [
  "this.HTMLText_53FEBE56_5CA1_6B8F_41C5_50EAF072D4F0"
 ],
 "scrollBarVisible": "rollOver",
 "left": "0%",
 "overflow": "scroll",
 "width": "100%",
 "scrollBarMargin": 2,
 "paddingRight": 0,
 "paddingLeft": 0,
 "borderRadius": 0,
 "backgroundColorRatios": [
  1
 ],
 "propagateClick": false,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "top": "0%",
 "backgroundColor": [
  "#000000"
 ],
 "verticalAlign": "top",
 "minWidth": 1,
 "layout": "absolute",
 "height": "100%",
 "class": "Container",
 "borderSize": 0,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "gap": 10,
 "contentOpaque": true,
 "scrollBarColor": "#000000",
 "data": {
  "name": "Resepsionis"
 },
 "shadow": false,
 "visible": false
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_40CC4C31_51CB_FD68_41B0_9E941895D5FB",
 "backgroundOpacity": 0.29,
 "children": [
  "this.HTMLText_4D0B4A70_5CA1_2B82_41D0_389FED1538FD"
 ],
 "scrollBarVisible": "rollOver",
 "left": "0%",
 "overflow": "scroll",
 "width": "100%",
 "scrollBarMargin": 2,
 "paddingRight": 0,
 "paddingLeft": 0,
 "borderRadius": 0,
 "backgroundColorRatios": [
  1
 ],
 "propagateClick": false,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "top": "0%",
 "backgroundColor": [
  "#000000"
 ],
 "verticalAlign": "top",
 "minWidth": 1,
 "layout": "absolute",
 "height": "100%",
 "class": "Container",
 "borderSize": 0,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "gap": 10,
 "contentOpaque": true,
 "scrollBarColor": "#000000",
 "data": {
  "name": "Konsultasi"
 },
 "shadow": false,
 "visible": false
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_4048C5CB_51C9_8F38_41C7_422DBE214B70",
 "backgroundOpacity": 0.29,
 "children": [
  "this.HTMLText_4C1B3F4F_5CBF_299D_41D2_D6851B73F15D"
 ],
 "scrollBarVisible": "rollOver",
 "left": "0%",
 "overflow": "scroll",
 "width": "100%",
 "scrollBarMargin": 2,
 "paddingRight": 0,
 "paddingLeft": 0,
 "borderRadius": 0,
 "backgroundColorRatios": [
  1
 ],
 "propagateClick": false,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "top": "0%",
 "backgroundColor": [
  "#000000"
 ],
 "verticalAlign": "top",
 "minWidth": 1,
 "layout": "absolute",
 "height": "100%",
 "class": "Container",
 "borderSize": 0,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "gap": 10,
 "contentOpaque": true,
 "scrollBarColor": "#000000",
 "data": {
  "name": "pemeriksaan & penanganan pasien"
 },
 "shadow": false,
 "visible": false
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_4C38E2A3_5CAE_F886_41C2_A1644A8229A4",
 "backgroundOpacity": 0.29,
 "children": [
  "this.HTMLText_4C2E5270_5CAE_FB82_41D4_303F973B94CF"
 ],
 "scrollBarVisible": "rollOver",
 "left": "0%",
 "overflow": "scroll",
 "width": "100%",
 "scrollBarMargin": 2,
 "paddingRight": 0,
 "paddingLeft": 0,
 "borderRadius": 0,
 "backgroundColorRatios": [
  1
 ],
 "propagateClick": false,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "top": "0%",
 "backgroundColor": [
  "#000000"
 ],
 "verticalAlign": "top",
 "minWidth": 1,
 "layout": "absolute",
 "height": "100%",
 "class": "Container",
 "borderSize": 0,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "gap": 10,
 "contentOpaque": true,
 "scrollBarColor": "#000000",
 "data": {
  "name": "Ruang Periksa"
 },
 "shadow": false,
 "visible": false
},
{
 "horizontalAlign": "center",
 "maxHeight": 60,
 "maxWidth": 60,
 "id": "IconButton_523896F0_47E2_FC06_41CE_86406FA85834",
 "backgroundOpacity": 0,
 "width": 30,
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 1,
 "propagateClick": false,
 "verticalAlign": "middle",
 "height": 30,
 "minWidth": 1,
 "mode": "toggle",
 "class": "IconButton",
 "transparencyActive": true,
 "paddingTop": 0,
 "pressedIconURL": "skin/IconButton_523896F0_47E2_FC06_41CE_86406FA85834_pressed.png",
 "paddingBottom": 0,
 "borderSize": 0,
 "iconURL": "skin/IconButton_523896F0_47E2_FC06_41CE_86406FA85834.png",
 "data": {
  "name": "IconButton Sound"
 },
 "shadow": false,
 "cursor": "hand"
},
{
 "horizontalAlign": "center",
 "maxHeight": 60,
 "maxWidth": 60,
 "id": "IconButton_523876F0_47E2_FC06_41C7_80F55EB340DD",
 "backgroundOpacity": 0,
 "width": 30,
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 1,
 "propagateClick": false,
 "verticalAlign": "middle",
 "height": 30,
 "minWidth": 1,
 "mode": "toggle",
 "class": "IconButton",
 "transparencyActive": true,
 "paddingTop": 0,
 "pressedIconURL": "skin/IconButton_523876F0_47E2_FC06_41C7_80F55EB340DD_pressed.png",
 "paddingBottom": 0,
 "borderSize": 0,
 "iconURL": "skin/IconButton_523876F0_47E2_FC06_41C7_80F55EB340DD.png",
 "data": {
  "name": "IconButton Fullscreen"
 },
 "shadow": false,
 "cursor": "hand"
},
{
 "inertia": true,
 "hfov": 45,
 "angle": 0,
 "image": {
  "levels": [
   {
    "url": "media/panorama_4CD2EEC2_47A1_2C0A_41CF_574951DEA940_tcap0.png",
    "width": 3480,
    "height": 3480,
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "class": "TripodCapPanoramaOverlay",
 "rotate": true,
 "id": "panorama_4DFC8106_47A6_D40B_41C0_1FA8E4EF6C8E_tcap0",
 "distance": 50
},
{
 "useHandCursor": true,
 "maps": [
  {
   "yaw": -17.48,
   "hfov": 14.35,
   "image": {
    "levels": [
     {
      "url": "media/panorama_4DFC8106_47A6_D40B_41C0_1FA8E4EF6C8E_0_HS_0_0_0_map.gif",
      "width": 36,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -29.98,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_5DDFCF00_47E7_EC06_41CC_CDB6E721AF81",
   "pitch": -29.98,
   "yaw": -17.48,
   "hfov": 14.35,
   "distance": 100
  }
 ],
 "id": "overlay_53593422_47E3_3C0A_4182_421976914D4F",
 "data": {
  "label": "Ruang 2"
 },
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_4DE906F0_47A6_DC06_41BA_81551B734975, this.camera_7504E8DE_61C1_E8CC_41D1_8119B4230405); this.mainPlayList.set('selectedIndex', 5)",
   "mapColor": "#FF0000"
  }
 ]
},
{
 "useHandCursor": true,
 "maps": [
  {
   "yaw": 81.29,
   "hfov": 11.85,
   "image": {
    "levels": [
     {
      "url": "media/panorama_4DFC8106_47A6_D40B_41C0_1FA8E4EF6C8E_0_HS_1_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -6.68,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_40F35D39_51C8_E6BD_41D0_B79ABAAACB3B",
   "pitch": -6.68,
   "yaw": 81.29,
   "hfov": 11.85,
   "distance": 100
  }
 ],
 "id": "overlay_404FB659_51CB_E2FD_41C5_249DB9C140F1",
 "data": {
  "label": "Pemeriksaan"
 },
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.setComponentVisibility(this.Container_4048C5CB_51C9_8F38_41C7_422DBE214B70, true, 0, null, null, false); this.setComponentVisibility(this.Container_4048C5CB_51C9_8F38_41C7_422DBE214B70, false, 2000, null, 'hideEffect', false)",
   "mapColor": "#FF0000"
  }
 ]
},
{
 "useHandCursor": true,
 "maps": [
  {
   "yaw": 21.23,
   "hfov": 11.85,
   "image": {
    "levels": [
     {
      "url": "media/panorama_4DFC8106_47A6_D40B_41C0_1FA8E4EF6C8E_0_HS_2_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -6.68,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_40F2AD39_51C8_E6BD_41BF_0B0EBB28637D",
   "pitch": -6.68,
   "yaw": 21.23,
   "hfov": 11.85,
   "distance": 100
  }
 ],
 "id": "overlay_408BC2A7_51C8_6255_41AB_08F2437E205F",
 "data": {
  "label": "Konsultasi"
 },
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.setComponentVisibility(this.Container_40CC4C31_51CB_FD68_41B0_9E941895D5FB, true, 0, null, null, false); this.setComponentVisibility(this.Container_40CC4C31_51CB_FD68_41B0_9E941895D5FB, false, 2000, null, 'hideEffect', false)",
   "mapColor": "#FF0000"
  }
 ]
},
{
 "inertia": true,
 "hfov": 45,
 "angle": 0,
 "image": {
  "levels": [
   {
    "url": "media/panorama_4CD2EEC2_47A1_2C0A_41CF_574951DEA940_tcap0.png",
    "width": 3480,
    "height": 3480,
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "class": "TripodCapPanoramaOverlay",
 "rotate": true,
 "id": "panorama_4DE906F0_47A6_DC06_41BA_81551B734975_tcap0",
 "distance": 50
},
{
 "useHandCursor": true,
 "maps": [
  {
   "yaw": 1.03,
   "hfov": 15.73,
   "image": {
    "levels": [
     {
      "url": "media/panorama_4DE906F0_47A6_DC06_41BA_81551B734975_0_HS_0_0_0_map.gif",
      "width": 36,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -18.27,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_5DDE1EFF_47E7_EDFA_41C3_AE684EABE7B3",
   "pitch": -18.27,
   "yaw": 1.03,
   "hfov": 15.73,
   "distance": 100
  }
 ],
 "id": "overlay_539F8CC9_47E3_6C06_41CF_4D2E5EACB307",
 "data": {
  "label": "Ruang 1"
 },
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_4DEF3105_47A1_7409_41D0_F0499469C855, this.camera_7519C8C1_61C1_F734_41CE_8102C6CBC547); this.mainPlayList.set('selectedIndex', 3)",
   "mapColor": "#FF0000"
  }
 ]
},
{
 "useHandCursor": true,
 "maps": [
  {
   "yaw": 147.6,
   "hfov": 14.86,
   "image": {
    "levels": [
     {
      "url": "media/panorama_4DE906F0_47A6_DC06_41BA_81551B734975_0_HS_1_0_0_map.gif",
      "width": 36,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -26.2,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_5DDE7EFF_47E7_EDFA_4188_BC350E85719D",
   "pitch": -26.2,
   "yaw": 147.6,
   "hfov": 14.86,
   "distance": 100
  }
 ],
 "id": "overlay_530F14E9_47E3_DC06_41AE_B0F5CC517E59",
 "data": {
  "label": "Ruang praktik"
 },
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_4DFC8106_47A6_D40B_41C0_1FA8E4EF6C8E, this.camera_7516F8CF_61C1_E8CC_41CB_2C23106C1D3D); this.mainPlayList.set('selectedIndex', 6)",
   "mapColor": "#FF0000"
  }
 ]
},
{
 "useHandCursor": true,
 "maps": [
  {
   "yaw": 85.44,
   "hfov": 11.81,
   "image": {
    "levels": [
     {
      "url": "media/panorama_4DE906F0_47A6_DC06_41BA_81551B734975_0_HS_2_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -8.19,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_40F3CD38_51C8_E6BB_41D2_5A6D2C5EBB63",
   "pitch": -8.19,
   "yaw": 85.44,
   "hfov": 11.81,
   "distance": 100
  }
 ],
 "id": "overlay_40B76EC1_51C9_A3CD_4172_6ACFE3DC79BC",
 "data": {
  "label": "Konsultasi"
 },
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.setComponentVisibility(this.Container_40CC4C31_51CB_FD68_41B0_9E941895D5FB, true, 0, null, null, false); this.setComponentVisibility(this.Container_40CC4C31_51CB_FD68_41B0_9E941895D5FB, false, 2000, null, 'hideEffect', false)",
   "mapColor": "#FF0000"
  }
 ]
},
{
 "useHandCursor": true,
 "maps": [
  {
   "yaw": 120.57,
   "hfov": 11.9,
   "image": {
    "levels": [
     {
      "url": "media/panorama_4DE906F0_47A6_DC06_41BA_81551B734975_0_HS_3_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -3.66,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_40F32D38_51C8_E6BB_41CD_D5D7CEBBDC8B",
   "pitch": -3.66,
   "yaw": 120.57,
   "hfov": 11.9,
   "distance": 100
  }
 ],
 "id": "overlay_43C5E0AA_51C8_9E5F_41CA_2CE9A3F5DDCB",
 "data": {
  "label": "Pemeriksaan"
 },
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.setComponentVisibility(this.Container_4048C5CB_51C9_8F38_41C7_422DBE214B70, true, 0, null, null, false); this.setComponentVisibility(this.Container_4048C5CB_51C9_8F38_41C7_422DBE214B70, false, 2000, null, 'hideEffect', false)",
   "mapColor": "#FF0000"
  }
 ]
},
{
 "inertia": true,
 "hfov": 45,
 "angle": 0,
 "image": {
  "levels": [
   {
    "url": "media/panorama_4CD2EEC2_47A1_2C0A_41CF_574951DEA940_tcap0.png",
    "width": 3480,
    "height": 3480,
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "class": "TripodCapPanoramaOverlay",
 "rotate": true,
 "id": "panorama_4DEF3105_47A1_7409_41D0_F0499469C855_tcap0",
 "distance": 50
},
{
 "useHandCursor": true,
 "maps": [
  {
   "yaw": 153.83,
   "hfov": 12.2,
   "image": {
    "levels": [
     {
      "url": "media/panorama_4DEF3105_47A1_7409_41D0_F0499469C855_0_HS_0_0_0_map.gif",
      "width": 36,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -30.02,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_5DDC1EFE_47E7_EDFA_41B3_E227F6465A74",
   "pitch": -30.02,
   "yaw": 153.83,
   "hfov": 12.2,
   "distance": 100
  }
 ],
 "id": "overlay_53DDA768_47E1_7C07_41C2_588DD9528ED6",
 "data": {
  "label": "Pintu Utama"
 },
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_4DF3FD2D_47A1_EC19_41AA_50A600976861, this.camera_75EF58B2_61C1_F754_41BA_99BDBB931727); this.mainPlayList.set('selectedIndex', 1)",
   "mapColor": "#FF0000"
  }
 ]
},
{
 "useHandCursor": true,
 "maps": [
  {
   "yaw": 7.42,
   "hfov": 12.34,
   "image": {
    "levels": [
     {
      "url": "media/panorama_4DEF3105_47A1_7409_41D0_F0499469C855_0_HS_1_0_0_map.gif",
      "width": 36,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -28.9,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_5DDC4EFE_47E7_EDFA_41CD_9AB929ADE841",
   "pitch": -28.9,
   "yaw": 7.42,
   "hfov": 12.34,
   "distance": 100
  }
 ],
 "id": "overlay_535B2152_47E1_D40A_4160_EA48D51D2752",
 "data": {
  "label": "Resepsionis"
 },
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_4DF90A77_47A1_5409_41A8_59DA1174DEBE, this.camera_75FBD894_61C1_F75C_41C1_0B16255A5EEA); this.mainPlayList.set('selectedIndex', 4)",
   "mapColor": "#FF0000"
  }
 ]
},
{
 "useHandCursor": true,
 "maps": [
  {
   "yaw": -135.5,
   "hfov": 16.21,
   "image": {
    "levels": [
     {
      "url": "media/panorama_4DEF3105_47A1_7409_41D0_F0499469C855_0_HS_2_0_0_map.gif",
      "width": 36,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -25.69,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_5DDD8EFE_47E7_EDFA_41C3_C6F74439436A",
   "pitch": -25.69,
   "yaw": -135.5,
   "hfov": 16.21,
   "distance": 100
  }
 ],
 "id": "overlay_53623FED_47EF_2C19_41C1_4744D1D15BD0",
 "data": {
  "label": "Ruang Tunggu"
 },
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_4DF9D6EE_47A1_3C1A_41CC_072E2A82BC5E, this.camera_75F3A8A2_61C1_F774_4183_D9B12C8154A9); this.mainPlayList.set('selectedIndex', 2)",
   "mapColor": "#FF0000"
  }
 ]
},
{
 "useHandCursor": true,
 "maps": [
  {
   "yaw": 27.07,
   "hfov": 11.31,
   "image": {
    "levels": [
     {
      "url": "media/panorama_4DEF3105_47A1_7409_41D0_F0499469C855_0_HS_3_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 3.34,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_5DDDEEFF_47E7_EDFA_41C2_0006BAC46360",
   "pitch": 3.34,
   "yaw": 27.07,
   "hfov": 11.31,
   "distance": 100
  }
 ],
 "id": "overlay_5338899F_47E1_7439_41CA_F2F7C0CE5E23",
 "data": {
  "label": "Ruang Praktik"
 },
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_4DE906F0_47A6_DC06_41BA_81551B734975, this.camera_75C2C886_61C1_F73C_41C5_F76F00DAF196); this.mainPlayList.set('selectedIndex', 5)",
   "mapColor": "#FF0000"
  }
 ]
},
{
 "useHandCursor": true,
 "maps": [
  {
   "yaw": -19.57,
   "hfov": 11.93,
   "image": {
    "levels": [
     {
      "url": "media/panorama_4DEF3105_47A1_7409_41D0_F0499469C855_0_HS_4_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 0.87,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_40FCDD37_51C8_E6B5_41B8_00784C050EFB",
   "pitch": 0.87,
   "yaw": -19.57,
   "hfov": 11.93,
   "distance": 100
  }
 ],
 "id": "overlay_40D2B9A3_51D7_EE4E_41CA_34D22C3CDEC9",
 "data": {
  "label": "Resepsionis"
 },
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.setComponentVisibility(this.Container_409871BA_51C8_8758_41D1_FADD7686FED9, true, 0, null, null, false); this.setComponentVisibility(this.Container_409871BA_51C8_8758_41D1_FADD7686FED9, false, 1000, null, 'hideEffect', false)",
   "mapColor": "#FF0000"
  }
 ]
},
{
 "useHandCursor": true,
 "maps": [
  {
   "yaw": -155.41,
   "hfov": 11.29,
   "image": {
    "levels": [
     {
      "url": "media/panorama_4DEF3105_47A1_7409_41D0_F0499469C855_0_HS_5_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -4.44,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_40FC2D37_51C8_E6B5_419A_7F1F43A749B1",
   "pitch": -4.44,
   "yaw": -155.41,
   "hfov": 11.29,
   "distance": 100
  }
 ],
 "id": "overlay_40932496_51C8_A676_41AB_8642A4DEC15D",
 "data": {
  "label": "Ruang Tunggu"
 },
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.setComponentVisibility(this.Container_5E38CD86_51D8_BF28_41D2_5B9D920BE538, true, 0, null, null, false); this.setComponentVisibility(this.Container_5E38CD86_51D8_BF28_41D2_5B9D920BE538, false, 1000, null, 'hideEffect', false)",
   "mapColor": "#FF0000"
  }
 ]
},
{
 "useHandCursor": true,
 "maps": [
  {
   "yaw": 27.27,
   "hfov": 10.41,
   "image": {
    "levels": [
     {
      "url": "media/panorama_4DEF3105_47A1_7409_41D0_F0499469C855_0_HS_6_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 29.2,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_4AF5AB64_5CA7_6983_41C3_5DC3B11E592F",
   "pitch": 29.2,
   "yaw": 27.27,
   "hfov": 10.41,
   "distance": 100
  }
 ],
 "id": "overlay_4C03B73B_5CAF_7986_41D4_F2EBC105164D",
 "data": {
  "label": "Ruang Periiksa"
 },
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.setComponentVisibility(this.Container_4C38E2A3_5CAE_F886_41C2_A1644A8229A4, true, 0, null, null, false); this.setComponentVisibility(this.Container_4C38E2A3_5CAE_F886_41C2_A1644A8229A4, false, 2000, null, 'hideEffect', false)",
   "mapColor": "#FF0000"
  }
 ]
},
{
 "inertia": true,
 "hfov": 45,
 "angle": 0,
 "image": {
  "levels": [
   {
    "url": "media/panorama_4CD2EEC2_47A1_2C0A_41CF_574951DEA940_tcap0.png",
    "width": 3480,
    "height": 3480,
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "class": "TripodCapPanoramaOverlay",
 "rotate": true,
 "id": "panorama_4DF9D6EE_47A1_3C1A_41CC_072E2A82BC5E_tcap0",
 "distance": 50
},
{
 "useHandCursor": true,
 "maps": [
  {
   "yaw": 93.18,
   "hfov": 13.02,
   "image": {
    "levels": [
     {
      "url": "media/panorama_4DF9D6EE_47A1_3C1A_41CC_072E2A82BC5E_0_HS_0_0_0_map.gif",
      "width": 36,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -22.48,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_5DC37EFE_47E7_EDFA_41C2_2977180BE48A",
   "pitch": -22.48,
   "yaw": 93.18,
   "hfov": 13.02,
   "distance": 100
  }
 ],
 "id": "overlay_54000263_47E2_D40A_41D1_76ED0B3A0716",
 "data": {
  "label": "Pintu Utama"
 },
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_4DF3FD2D_47A1_EC19_41AA_50A600976861, this.camera_75413917_61C1_E95C_41C5_5102E5EF96D2); this.mainPlayList.set('selectedIndex', 1)",
   "mapColor": "#FF0000"
  }
 ]
},
{
 "useHandCursor": true,
 "maps": [
  {
   "yaw": 55.06,
   "hfov": 15.09,
   "image": {
    "levels": [
     {
      "url": "media/panorama_4DF9D6EE_47A1_3C1A_41CC_072E2A82BC5E_0_HS_1_0_0_map.gif",
      "width": 36,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -24.31,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_5DDC8EFE_47E7_EDFA_4196_3F05F97AE712",
   "pitch": -24.31,
   "yaw": 55.06,
   "hfov": 15.09,
   "distance": 100
  }
 ],
 "id": "overlay_53483717_47E3_5C0A_41A7_B4C777116304",
 "data": {
  "label": "Ruang 1"
 },
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_4DEF3105_47A1_7409_41D0_F0499469C855, this.camera_7551E909_61C1_E934_41D6_46763DA35ACF); this.mainPlayList.set('selectedIndex', 3)",
   "mapColor": "#FF0000"
  }
 ]
},
{
 "useHandCursor": true,
 "maps": [
  {
   "yaw": 160.01,
   "hfov": 10.84,
   "image": {
    "levels": [
     {
      "url": "media/panorama_4DF9D6EE_47A1_3C1A_41CC_072E2A82BC5E_0_HS_2_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -16.9,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_40FD2D36_51C8_E6B7_41D2_80C373711086",
   "pitch": -16.9,
   "yaw": 160.01,
   "hfov": 10.84,
   "distance": 100
  }
 ],
 "id": "overlay_40AE7391_51D9_E24A_41C9_825E7A7CDFFB",
 "data": {
  "label": "Ruang Tunggu"
 },
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.setComponentVisibility(this.Container_5E38CD86_51D8_BF28_41D2_5B9D920BE538, true, 0, null, null, false); this.setComponentVisibility(this.Container_5E38CD86_51D8_BF28_41D2_5B9D920BE538, false, 1000, null, 'hideEffect', false)",
   "mapColor": "#FF0000"
  }
 ]
},
{
 "useHandCursor": true,
 "maps": [
  {
   "yaw": -97.31,
   "hfov": 15.49,
   "image": {
    "levels": [
     {
      "url": "media/panorama_4DF9D6EE_47A1_3C1A_41CC_072E2A82BC5E_0_HS_3_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 9,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_40FD0D36_51C8_E6B7_41D2_CA4B77CB6690",
   "pitch": 9,
   "yaw": -97.31,
   "hfov": 15.49,
   "distance": 100
  }
 ],
 "id": "overlay_4089CE5A_51D8_62FE_41A8_41FDF98221F8",
 "data": {
  "label": "Toilet"
 },
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.setComponentVisibility(this.Container_41F0D818_51C9_8558_41CD_B04C3C608EEC, true, 0, null, null, false); this.setComponentVisibility(this.Container_41F0D818_51C9_8558_41CD_B04C3C608EEC, false, 1000, null, 'hideEffect', false)",
   "mapColor": "#FF0000"
  }
 ]
},
{
 "useHandCursor": true,
 "maps": [
  {
   "yaw": 17.25,
   "hfov": 8.91,
   "image": {
    "levels": [
     {
      "url": "media/panorama_4DF9D6EE_47A1_3C1A_41CC_072E2A82BC5E_0_HS_4_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -0.53,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_40FD5D36_51C8_E6B7_41C0_3DD9D3C89809",
   "pitch": -0.53,
   "yaw": 17.25,
   "hfov": 8.91,
   "distance": 100
  }
 ],
 "id": "overlay_408D8E8C_51D8_A25B_41C3_B9E1ABB389F9",
 "data": {
  "label": "Resepsionis"
 },
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.setComponentVisibility(this.Container_409871BA_51C8_8758_41D1_FADD7686FED9, true, 0, null, null, false); this.setComponentVisibility(this.Container_409871BA_51C8_8758_41D1_FADD7686FED9, false, 1000, null, 'hideEffect', false)",
   "mapColor": "#FF0000"
  }
 ]
},
{
 "useHandCursor": true,
 "maps": [
  {
   "yaw": 38.52,
   "hfov": 9.05,
   "image": {
    "levels": [
     {
      "url": "media/panorama_4DF9D6EE_47A1_3C1A_41CC_072E2A82BC5E_0_HS_5_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 12.89,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_4AF7CB5E_5CA7_69BF_41D2_D5D671F5E1F6",
   "pitch": 12.89,
   "yaw": 38.52,
   "hfov": 9.05,
   "distance": 100
  }
 ],
 "id": "overlay_53043377_5CA1_198E_4161_B3067E5C0BF5",
 "data": {
  "label": "Ruang Periiksa"
 },
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.setComponentVisibility(this.Container_4C38E2A3_5CAE_F886_41C2_A1644A8229A4, true, 0, null, null, false); this.setComponentVisibility(this.Container_4C38E2A3_5CAE_F886_41C2_A1644A8229A4, false, 2000, null, 'hideEffect', false)",
   "mapColor": "#FF0000"
  }
 ]
},
{
 "inertia": true,
 "hfov": 45,
 "angle": 0,
 "image": {
  "levels": [
   {
    "url": "media/panorama_4CD2EEC2_47A1_2C0A_41CF_574951DEA940_tcap0.png",
    "width": 3480,
    "height": 3480,
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "class": "TripodCapPanoramaOverlay",
 "rotate": true,
 "id": "panorama_4CD2EEC2_47A1_2C0A_41CF_574951DEA940_tcap0",
 "distance": 50
},
{
 "useHandCursor": true,
 "maps": [
  {
   "yaw": -176.53,
   "hfov": 11.31,
   "image": {
    "levels": [
     {
      "url": "media/panorama_4CD2EEC2_47A1_2C0A_41CF_574951DEA940_0_HS_0_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 3.56,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_50AEB28B_47FE_D419_41D0_F026778704C9",
   "pitch": 3.56,
   "yaw": -176.53,
   "hfov": 11.31,
   "distance": 100
  }
 ],
 "id": "overlay_531AE71F_47E1_3C3A_41BB_C2BDB13C1FD3",
 "data": {
  "label": "pintu masuk"
 },
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_4DF3FD2D_47A1_EC19_41AA_50A600976861, this.camera_753468EC_61C1_E8CC_41CD_A703B2E125B8); this.mainPlayList.set('selectedIndex', 1)",
   "mapColor": "#FF0000"
  }
 ]
},
{
 "inertia": true,
 "hfov": 45,
 "angle": 0,
 "image": {
  "levels": [
   {
    "url": "media/panorama_4CD2EEC2_47A1_2C0A_41CF_574951DEA940_tcap0.png",
    "width": 3480,
    "height": 3480,
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "class": "TripodCapPanoramaOverlay",
 "rotate": true,
 "id": "panorama_4DF90A77_47A1_5409_41A8_59DA1174DEBE_tcap0",
 "distance": 50
},
{
 "useHandCursor": true,
 "maps": [
  {
   "yaw": -2.29,
   "hfov": 14.91,
   "image": {
    "levels": [
     {
      "url": "media/panorama_4DF90A77_47A1_5409_41A8_59DA1174DEBE_0_HS_0_0_0_map.gif",
      "width": 36,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -25.81,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_5DDD5EFF_47E7_EDFA_41B2_2204F349A974",
   "pitch": -25.81,
   "yaw": -2.29,
   "hfov": 14.91,
   "distance": 100
  }
 ],
 "id": "overlay_53E8DDA7_47EF_EC0A_41B5_E44B17A6481C",
 "data": {
  "label": "Ruang 1"
 },
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_4DEF3105_47A1_7409_41D0_F0499469C855, this.camera_7523F8FA_61C1_E8D4_41D5_C12A3810D59B); this.mainPlayList.set('selectedIndex', 3)",
   "mapColor": "#FF0000"
  }
 ]
},
{
 "useHandCursor": true,
 "maps": [
  {
   "yaw": -122.08,
   "hfov": 14.32,
   "image": {
    "levels": [
     {
      "url": "media/panorama_4DF90A77_47A1_5409_41A8_59DA1174DEBE_0_HS_1_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 2.37,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_5DDEBEFF_47E7_EDFA_41C7_9FA9B06934A5",
   "pitch": 2.37,
   "yaw": -122.08,
   "hfov": 14.32,
   "distance": 100
  }
 ],
 "id": "overlay_530446E3_47E2_DC0A_41B2_A74CF2BAB086",
 "data": {
  "label": "Ruang Praktik"
 },
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.mainPlayList.set('selectedIndex', 5)",
   "mapColor": "#FF0000"
  }
 ]
},
{
 "useHandCursor": true,
 "maps": [
  {
   "yaw": 13.07,
   "hfov": 11.26,
   "image": {
    "levels": [
     {
      "url": "media/panorama_4DF90A77_47A1_5409_41A8_59DA1174DEBE_0_HS_2_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 6.14,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_40FC4D37_51C8_E6B5_41BD_F72ACB883E6E",
   "pitch": 6.14,
   "yaw": 13.07,
   "hfov": 11.26,
   "distance": 100
  }
 ],
 "id": "overlay_40A5386D_51C8_AED5_41D3_42F8A72A5AE7",
 "data": {
  "label": "Ruang Tunggu"
 },
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.setComponentVisibility(this.Container_5E38CD86_51D8_BF28_41D2_5B9D920BE538, true, 0, null, null, false); this.setComponentVisibility(this.Container_5E38CD86_51D8_BF28_41D2_5B9D920BE538, false, 1000, null, 'hideEffect', false)",
   "mapColor": "#FF0000"
  }
 ]
},
{
 "useHandCursor": true,
 "maps": [
  {
   "yaw": 84.88,
   "hfov": 18.31,
   "image": {
    "levels": [
     {
      "url": "media/panorama_4DF90A77_47A1_5409_41A8_59DA1174DEBE_0_HS_3_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 3.9,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_40F3AD38_51C8_E6BB_41C3_1CC2B357B3EF",
   "pitch": 3.9,
   "yaw": 84.88,
   "hfov": 18.31,
   "distance": 100
  }
 ],
 "id": "overlay_409B067E_51C8_62B6_41A8_091850AE2E69",
 "data": {
  "label": "Resepsionis"
 },
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.setComponentVisibility(this.Container_409871BA_51C8_8758_41D1_FADD7686FED9, true, 0, null, null, false); this.setComponentVisibility(this.Container_409871BA_51C8_8758_41D1_FADD7686FED9, false, 1000, null, 'hideEffect', false)",
   "mapColor": "#FF0000"
  }
 ]
},
{
 "useHandCursor": true,
 "maps": [
  {
   "yaw": -120.81,
   "hfov": 8.91,
   "image": {
    "levels": [
     {
      "url": "media/panorama_4DF90A77_47A1_5409_41A8_59DA1174DEBE_0_HS_4_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 41.67,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_4AF4DB65_5CA7_698D_41C2_426E5749C25A",
   "pitch": 41.67,
   "yaw": -120.81,
   "hfov": 8.91,
   "distance": 100
  }
 ],
 "id": "overlay_53406EE0_5CA7_6882_41D6_1A3E72EC5FBC",
 "data": {
  "label": "Ruang Periiksa"
 },
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.setComponentVisibility(this.Container_4C38E2A3_5CAE_F886_41C2_A1644A8229A4, true, 0, null, null, false); this.setComponentVisibility(this.Container_4C38E2A3_5CAE_F886_41C2_A1644A8229A4, false, 2000, null, 'hideEffect', false)",
   "mapColor": "#FF0000"
  }
 ]
},
{
 "horizontalAlign": "center",
 "maxHeight": 60,
 "maxWidth": 60,
 "id": "IconButton_523886F0_47E2_FC06_41A5_8AA1081CECC6",
 "backgroundOpacity": 0,
 "width": 34,
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 1,
 "propagateClick": false,
 "verticalAlign": "middle",
 "height": 34,
 "minWidth": 1,
 "mode": "toggle",
 "class": "IconButton",
 "transparencyActive": true,
 "paddingTop": 0,
 "pressedIconURL": "skin/IconButton_523886F0_47E2_FC06_41A5_8AA1081CECC6_pressed.png",
 "paddingBottom": 0,
 "borderSize": 0,
 "iconURL": "skin/IconButton_523886F0_47E2_FC06_41A5_8AA1081CECC6.png",
 "data": {
  "name": "IconButton Gyroscopic"
 },
 "shadow": false,
 "cursor": "hand"
},
{
 "horizontalAlign": "center",
 "maxHeight": 23,
 "maxWidth": 35,
 "id": "IconButton_507A2FB1_47E1_2C09_41BB_F46A200D03E4",
 "backgroundOpacity": 0,
 "width": 35,
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 1,
 "propagateClick": false,
 "verticalAlign": "middle",
 "height": 23,
 "minWidth": 1,
 "mode": "push",
 "class": "IconButton",
 "transparencyActive": false,
 "paddingTop": 0,
 "paddingBottom": 0,
 "borderSize": 0,
 "iconURL": "skin/IconButton_507A2FB1_47E1_2C09_41BB_F46A200D03E4.png",
 "data": {
  "name": "IconButton5728"
 },
 "shadow": false,
 "cursor": "hand"
},
{
 "inertia": true,
 "hfov": 45,
 "angle": 0,
 "image": {
  "levels": [
   {
    "url": "media/panorama_4CD2EEC2_47A1_2C0A_41CF_574951DEA940_tcap0.png",
    "width": 3480,
    "height": 3480,
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "class": "TripodCapPanoramaOverlay",
 "rotate": true,
 "id": "panorama_4DF3FD2D_47A1_EC19_41AA_50A600976861_tcap0",
 "distance": 50
},
{
 "useHandCursor": true,
 "maps": [
  {
   "yaw": 93.42,
   "hfov": 16.55,
   "image": {
    "levels": [
     {
      "url": "media/panorama_4DF3FD2D_47A1_EC19_41AA_50A600976861_0_HS_0_0_0_map.gif",
      "width": 36,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -23.06,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_5DC25EFD_47E7_EDFE_41D1_745E975E9137",
   "pitch": -23.06,
   "yaw": 93.42,
   "hfov": 16.55,
   "distance": 100
  }
 ],
 "id": "overlay_54099632_47E7_3C0B_41C3_71EE82BC5967",
 "data": {
  "label": "Ruang Tunggu"
 },
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_4DF9D6EE_47A1_3C1A_41CC_072E2A82BC5E, this.camera_749D5942_61C1_E934_41AD_698C7FF52712); this.mainPlayList.set('selectedIndex', 2)",
   "mapColor": "#FF0000"
  }
 ]
},
{
 "useHandCursor": true,
 "maps": [
  {
   "yaw": 155.51,
   "hfov": 14.91,
   "image": {
    "levels": [
     {
      "url": "media/panorama_4DF3FD2D_47A1_EC19_41AA_50A600976861_0_HS_1_0_0_map.gif",
      "width": 36,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -34.03,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_5DC3BEFD_47E7_EDFE_41B3_A350F0CA9F20",
   "pitch": -34.03,
   "yaw": 155.51,
   "hfov": 14.91,
   "distance": 100
  }
 ],
 "id": "overlay_533C8AD0_47E1_D406_41C6_E1FDC1AD17FC",
 "data": {
  "label": "Ruang 1"
 },
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_4DEF3105_47A1_7409_41D0_F0499469C855, this.camera_756F7933_61C1_E954_41C4_718BEAD8E2C0); this.mainPlayList.set('selectedIndex', 3)",
   "mapColor": "#FF0000"
  }
 ]
},
{
 "useHandCursor": true,
 "maps": [
  {
   "yaw": 1.02,
   "hfov": 36.98,
   "image": {
    "levels": [
     {
      "url": "media/panorama_4DF3FD2D_47A1_EC19_41AA_50A600976861_0_HS_2_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -2.12,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_5DC3FEFD_47E7_EDFE_41C9_7F233CE40C31",
   "pitch": -2.12,
   "yaw": 1.02,
   "hfov": 36.98,
   "distance": 100
  }
 ],
 "id": "overlay_52D8769F_47E1_3C39_41C7_301285E8871B",
 "data": {
  "label": "keluar"
 },
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_4CD2EEC2_47A1_2C0A_41CF_574951DEA940, this.camera_757F1925_61C1_E97C_41B4_144092B1C948); this.mainPlayList.set('selectedIndex', 0)",
   "mapColor": "#FF0000"
  }
 ]
},
{
 "useHandCursor": true,
 "maps": [
  {
   "yaw": 62.56,
   "hfov": 11.22,
   "image": {
    "levels": [
     {
      "url": "media/panorama_4DF3FD2D_47A1_EC19_41AA_50A600976861_0_HS_3_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 8.02,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_5F258720_51CB_8B68_4190_B65C520CD6BB",
   "pitch": 8.02,
   "yaw": 62.56,
   "hfov": 11.22,
   "distance": 100
  }
 ],
 "id": "overlay_5CACFE97_51C8_BD28_41CF_AF42DEC7C61C",
 "data": {
  "label": "Ruang Tunggu"
 },
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.setComponentVisibility(this.Container_5E38CD86_51D8_BF28_41D2_5B9D920BE538, true, 0, null, null, false); this.setComponentVisibility(this.Container_5E38CD86_51D8_BF28_41D2_5B9D920BE538, false, 1000, null, 'hideEffect', false)",
   "mapColor": "#FF0000"
  }
 ]
},
{
 "useHandCursor": true,
 "maps": [
  {
   "yaw": 93.47,
   "hfov": 5.81,
   "image": {
    "levels": [
     {
      "url": "media/panorama_4DF3FD2D_47A1_EC19_41AA_50A600976861_0_HS_4_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 7.85,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_5F3EA722_51CB_8B68_41D2_3861D96565E6",
   "pitch": 7.85,
   "yaw": 93.47,
   "hfov": 5.81,
   "distance": 100
  }
 ],
 "id": "overlay_5FA050FF_51C8_86D8_4192_BD807DFCD952",
 "data": {
  "label": "Toilet"
 },
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.setComponentVisibility(this.Container_41F0D818_51C9_8558_41CD_B04C3C608EEC, true, 0, null, null, false); this.setComponentVisibility(this.Container_41F0D818_51C9_8558_41CD_B04C3C608EEC, false, 1000, null, 'hideEffect', false)",
   "mapColor": "#FF0000"
  }
 ]
},
{
 "useHandCursor": true,
 "maps": [
  {
   "yaw": 153.27,
   "hfov": 4.75,
   "image": {
    "levels": [
     {
      "url": "media/panorama_4DF3FD2D_47A1_EC19_41AA_50A600976861_0_HS_5_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 1.81,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_5F3F2723_51CB_8B68_41C5_68A7F22ACF0F",
   "pitch": 1.81,
   "yaw": 153.27,
   "hfov": 4.75,
   "distance": 100
  }
 ],
 "id": "overlay_5F401F45_51C9_9B28_41A9_CFC0EAD7428A",
 "data": {
  "label": "Resepsionis"
 },
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.setComponentVisibility(this.Container_409871BA_51C8_8758_41D1_FADD7686FED9, true, 0, null, null, false); this.setComponentVisibility(this.Container_409871BA_51C8_8758_41D1_FADD7686FED9, false, 1000, null, 'hideEffect', false)",
   "mapColor": "#FF0000"
  }
 ]
},
{
 "useHandCursor": true,
 "maps": [
  {
   "yaw": -179.28,
   "hfov": 6.21,
   "image": {
    "levels": [
     {
      "url": "media/panorama_4DF3FD2D_47A1_EC19_41AA_50A600976861_0_HS_6_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 19.89,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_4B13A805_5CA1_3782_41D0_F3CAF34E6590",
   "pitch": 19.89,
   "yaw": -179.28,
   "hfov": 6.21,
   "distance": 100
  }
 ],
 "id": "overlay_537A42D5_5CA6_F882_41D3_11CC373C7347",
 "data": {
  "label": "Ruang Periiksa"
 },
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.setComponentVisibility(this.Container_4C38E2A3_5CAE_F886_41C2_A1644A8229A4, true, 0, null, null, false); this.setComponentVisibility(this.Container_4C38E2A3_5CAE_F886_41C2_A1644A8229A4, false, 2000, null, 'hideEffect', false)",
   "mapColor": "#FF0000"
  }
 ]
},
{
 "useHandCursor": true,
 "maps": [
  {
   "yaw": -178.56,
   "hfov": 8.13,
   "image": {
    "levels": [
     {
      "url": "media/panorama_4DF3FD2D_47A1_EC19_41AA_50A600976861_0_HS_7_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 1.88,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_4B141805_5CA1_3782_41D0_9A83E8FD0D7F",
   "pitch": 1.88,
   "yaw": -178.56,
   "hfov": 8.13,
   "distance": 100
  }
 ],
 "id": "overlay_4F9061D9_5CA1_3882_41D4_B0136C0C5A07",
 "data": {
  "label": "Ruang Praktik"
 },
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.mainPlayList.set('selectedIndex', 5)",
   "mapColor": "#FF0000"
  }
 ]
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_523AD6EF_47E2_FC1A_4181_012BF248BFA6",
 "backgroundOpacity": 0,
 "width": 66,
 "scrollBarVisible": "rollOver",
 "left": "0%",
 "overflow": "scroll",
 "children": [
  "this.Container_523AC6EF_47E2_FC1A_4196_C20CDAE80110",
  "this.IconButton_523AF6EF_47E2_FC1A_41CC_582EB9D3BE74"
 ],
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 1,
 "propagateClick": true,
 "top": "0%",
 "verticalAlign": "top",
 "creationPolicy": "inAdvance",
 "height": "100%",
 "minWidth": 1,
 "layout": "absolute",
 "scrollBarWidth": 10,
 "class": "Container",
 "borderSize": 0,
 "paddingTop": 0,
 "paddingBottom": 0,
 "gap": 10,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "- COLLAPSE"
 },
 "shadow": false,
 "visible": false
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_523AE6EF_47E2_FC1A_41C8_023AA8332FE8",
 "backgroundOpacity": 0,
 "children": [
  "this.Container_523906EF_47E2_FC1A_41CD_01902B4883E5",
  "this.IconButton_5238A6F0_47E2_FC06_41C0_03C8CEEE075C"
 ],
 "scrollBarVisible": "rollOver",
 "left": "0%",
 "overflow": "scroll",
 "width": "100%",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 1,
 "propagateClick": false,
 "top": "0%",
 "height": "100%",
 "verticalAlign": "top",
 "minWidth": 1,
 "layout": "absolute",
 "scrollBarWidth": 10,
 "class": "Container",
 "borderSize": 0,
 "paddingTop": 0,
 "paddingBottom": 0,
 "gap": 10,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "- EXPANDED"
 },
 "shadow": false
},
{
 "fontFamily": "Garamond",
 "horizontalAlign": "center",
 "id": "Label_5E57C284_51D9_8528_41D0_0FB66DAB6C9E",
 "backgroundOpacity": 0,
 "left": "15%",
 "right": "15%",
 "paddingRight": 0,
 "paddingLeft": 0,
 "borderRadius": 0,
 "text": "Ruang Tunggu",
 "propagateClick": false,
 "minHeight": 1,
 "top": "20%",
 "verticalAlign": "middle",
 "bottom": "20%",
 "minWidth": 1,
 "class": "Label",
 "borderSize": 0,
 "paddingTop": 0,
 "paddingBottom": 0,
 "fontStyle": "normal",
 "data": {
  "name": "Label6730"
 },
 "fontSize": "15vmin",
 "shadow": false,
 "fontWeight": "bold",
 "textDecoration": "none",
 "fontColor": "#FFFFFF"
},
{
 "fontFamily": "Garamond",
 "horizontalAlign": "center",
 "id": "Label_43D097B3_51C9_8B68_41B9_9292C8860CAD",
 "backgroundOpacity": 0,
 "left": "15%",
 "right": "15%",
 "paddingRight": 0,
 "paddingLeft": 0,
 "borderRadius": 0,
 "text": "Toilet",
 "propagateClick": false,
 "minHeight": 1,
 "top": "20%",
 "verticalAlign": "middle",
 "bottom": "20%",
 "minWidth": 1,
 "class": "Label",
 "borderSize": 0,
 "paddingTop": 0,
 "paddingBottom": 0,
 "fontStyle": "normal",
 "data": {
  "name": "Label6730"
 },
 "fontSize": "15vmin",
 "shadow": false,
 "fontWeight": "bold",
 "textDecoration": "none",
 "fontColor": "#FFFFFF"
},
{
 "scrollBarOpacity": 0.5,
 "id": "HTMLText_53FEBE56_5CA1_6B8F_41C5_50EAF072D4F0",
 "backgroundOpacity": 0,
 "scrollBarVisible": "rollOver",
 "left": "15%",
 "right": "15%",
 "scrollBarMargin": 2,
 "paddingRight": 10,
 "paddingLeft": 10,
 "borderRadius": 0,
 "propagateClick": false,
 "minHeight": 1,
 "top": "35%",
 "borderColor": "#000000",
 "bottom": "35%",
 "scrollBarWidth": 10,
 "minWidth": 1,
 "class": "HTMLText",
 "borderSize": 3,
 "paddingTop": 10,
 "paddingBottom": 10,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:center;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:80px;font-family:Garamond, serif;\"><B>Receptionist /</B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:center;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:80px;font-family:Garamond, serif;\"><B>Tempat Pendaftaran</B></SPAN></SPAN></DIV></div>",
 "scrollBarColor": "#000000",
 "data": {
  "name": "HTMLText1580"
 },
 "shadow": false
},
{
 "scrollBarOpacity": 0.5,
 "id": "HTMLText_4D0B4A70_5CA1_2B82_41D0_389FED1538FD",
 "backgroundOpacity": 0,
 "scrollBarVisible": "rollOver",
 "left": "15%",
 "right": "15%",
 "scrollBarMargin": 2,
 "paddingRight": 10,
 "paddingLeft": 10,
 "borderRadius": 0,
 "propagateClick": false,
 "minHeight": 1,
 "top": "35%",
 "borderColor": "#000000",
 "bottom": "28.06%",
 "scrollBarWidth": 10,
 "minWidth": 1,
 "class": "HTMLText",
 "borderSize": 3,
 "paddingTop": 10,
 "paddingBottom": 10,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:center;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:80px;font-family:Garamond, serif;\"><B>Meja Konsultasi:</B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:center;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:35px;font-family:Garamond, serif;\"><B>Tempat dimana pasien bertemu dengan dokter untuk dilakukan anamnesa atau tanya jawab tentang keluhan gigi yang dirasakan oleh pasien</B></SPAN></SPAN></DIV></div>",
 "scrollBarColor": "#000000",
 "data": {
  "name": "HTMLText1580"
 },
 "shadow": false
},
{
 "scrollBarOpacity": 0.5,
 "id": "HTMLText_4C1B3F4F_5CBF_299D_41D2_D6851B73F15D",
 "backgroundOpacity": 0,
 "scrollBarVisible": "rollOver",
 "left": "15%",
 "right": "15%",
 "scrollBarMargin": 2,
 "paddingRight": 10,
 "paddingLeft": 10,
 "borderRadius": 0,
 "propagateClick": false,
 "minHeight": 1,
 "top": "28.32%",
 "borderColor": "#000000",
 "bottom": "20.85%",
 "scrollBarWidth": 10,
 "minWidth": 1,
 "class": "HTMLText",
 "borderSize": 3,
 "paddingTop": 10,
 "paddingBottom": 10,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:center;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:80px;font-family:Garamond, serif;\"><B>Dental Unit /</B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:center;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:80px;font-family:Garamond, serif;\"><B>Kursi Gigi:</B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:center;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:35px;font-family:Garamond, serif;\"><B>alat yang dipakai oleh dokter gigi untuk membantu pemeriksaan, menentukan terapi dan tindakan yang dapat diberikan kepada pasien</B></SPAN></SPAN></DIV></div>",
 "scrollBarColor": "#000000",
 "data": {
  "name": "HTMLText1580"
 },
 "shadow": false
},
{
 "scrollBarOpacity": 0.5,
 "id": "HTMLText_4C2E5270_5CAE_FB82_41D4_303F973B94CF",
 "backgroundOpacity": 0,
 "scrollBarVisible": "rollOver",
 "left": "15%",
 "right": "15%",
 "scrollBarMargin": 2,
 "paddingRight": 10,
 "paddingLeft": 10,
 "borderRadius": 0,
 "propagateClick": false,
 "minHeight": 1,
 "top": "35%",
 "borderColor": "#000000",
 "bottom": "34.18%",
 "scrollBarWidth": 10,
 "minWidth": 1,
 "class": "HTMLText",
 "borderSize": 3,
 "paddingTop": 10,
 "paddingBottom": 10,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:center;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:80px;font-family:Garamond, serif;\"><B>Ruang Periksa:</B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:center;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:45px;font-family:Garamond, serif;\"><B>Ruangan untuk melakukan pemeriksaan dan tindakan pasien</B></SPAN></SPAN></DIV></div>",
 "scrollBarColor": "#000000",
 "data": {
  "name": "HTMLText1580"
 },
 "shadow": false
},
{
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_4DFC8106_47A6_D40B_41C0_1FA8E4EF6C8E_0_HS_0_0.png",
   "width": 1000,
   "height": 660,
   "class": "ImageResourceLevel"
  }
 ],
 "id": "AnimatedImageResource_5DDFCF00_47E7_EC06_41CC_CDB6E721AF81",
 "frameCount": 22,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_4DFC8106_47A6_D40B_41C0_1FA8E4EF6C8E_0_HS_1_0.png",
   "width": 460,
   "height": 690,
   "class": "ImageResourceLevel"
  }
 ],
 "id": "AnimatedImageResource_40F35D39_51C8_E6BD_41D0_B79ABAAACB3B",
 "frameCount": 22,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_4DFC8106_47A6_D40B_41C0_1FA8E4EF6C8E_0_HS_2_0.png",
   "width": 460,
   "height": 690,
   "class": "ImageResourceLevel"
  }
 ],
 "id": "AnimatedImageResource_40F2AD39_51C8_E6BD_41BF_0B0EBB28637D",
 "frameCount": 22,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_4DE906F0_47A6_DC06_41BA_81551B734975_0_HS_0_0.png",
   "width": 1000,
   "height": 660,
   "class": "ImageResourceLevel"
  }
 ],
 "id": "AnimatedImageResource_5DDE1EFF_47E7_EDFA_41C3_AE684EABE7B3",
 "frameCount": 22,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_4DE906F0_47A6_DC06_41BA_81551B734975_0_HS_1_0.png",
   "width": 1000,
   "height": 660,
   "class": "ImageResourceLevel"
  }
 ],
 "id": "AnimatedImageResource_5DDE7EFF_47E7_EDFA_4188_BC350E85719D",
 "frameCount": 22,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_4DE906F0_47A6_DC06_41BA_81551B734975_0_HS_2_0.png",
   "width": 460,
   "height": 690,
   "class": "ImageResourceLevel"
  }
 ],
 "id": "AnimatedImageResource_40F3CD38_51C8_E6BB_41D2_5A6D2C5EBB63",
 "frameCount": 22,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_4DE906F0_47A6_DC06_41BA_81551B734975_0_HS_3_0.png",
   "width": 460,
   "height": 690,
   "class": "ImageResourceLevel"
  }
 ],
 "id": "AnimatedImageResource_40F32D38_51C8_E6BB_41CD_D5D7CEBBDC8B",
 "frameCount": 22,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_4DEF3105_47A1_7409_41D0_F0499469C855_0_HS_0_0.png",
   "width": 1000,
   "height": 660,
   "class": "ImageResourceLevel"
  }
 ],
 "id": "AnimatedImageResource_5DDC1EFE_47E7_EDFA_41B3_E227F6465A74",
 "frameCount": 22,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_4DEF3105_47A1_7409_41D0_F0499469C855_0_HS_1_0.png",
   "width": 1000,
   "height": 660,
   "class": "ImageResourceLevel"
  }
 ],
 "id": "AnimatedImageResource_5DDC4EFE_47E7_EDFA_41CD_9AB929ADE841",
 "frameCount": 22,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_4DEF3105_47A1_7409_41D0_F0499469C855_0_HS_2_0.png",
   "width": 1000,
   "height": 660,
   "class": "ImageResourceLevel"
  }
 ],
 "id": "AnimatedImageResource_5DDD8EFE_47E7_EDFA_41C3_C6F74439436A",
 "frameCount": 22,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_4DEF3105_47A1_7409_41D0_F0499469C855_0_HS_3_0.png",
   "width": 800,
   "height": 1200,
   "class": "ImageResourceLevel"
  }
 ],
 "id": "AnimatedImageResource_5DDDEEFF_47E7_EDFA_41C2_0006BAC46360",
 "frameCount": 24,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_4DEF3105_47A1_7409_41D0_F0499469C855_0_HS_4_0.png",
   "width": 460,
   "height": 690,
   "class": "ImageResourceLevel"
  }
 ],
 "id": "AnimatedImageResource_40FCDD37_51C8_E6B5_41B8_00784C050EFB",
 "frameCount": 22,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_4DEF3105_47A1_7409_41D0_F0499469C855_0_HS_5_0.png",
   "width": 460,
   "height": 690,
   "class": "ImageResourceLevel"
  }
 ],
 "id": "AnimatedImageResource_40FC2D37_51C8_E6B5_419A_7F1F43A749B1",
 "frameCount": 22,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_4DEF3105_47A1_7409_41D0_F0499469C855_0_HS_6_0.png",
   "width": 460,
   "height": 690,
   "class": "ImageResourceLevel"
  }
 ],
 "id": "AnimatedImageResource_4AF5AB64_5CA7_6983_41C3_5DC3B11E592F",
 "frameCount": 22,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_4DF9D6EE_47A1_3C1A_41CC_072E2A82BC5E_0_HS_0_0.png",
   "width": 1000,
   "height": 660,
   "class": "ImageResourceLevel"
  }
 ],
 "id": "AnimatedImageResource_5DC37EFE_47E7_EDFA_41C2_2977180BE48A",
 "frameCount": 22,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_4DF9D6EE_47A1_3C1A_41CC_072E2A82BC5E_0_HS_1_0.png",
   "width": 1000,
   "height": 660,
   "class": "ImageResourceLevel"
  }
 ],
 "id": "AnimatedImageResource_5DDC8EFE_47E7_EDFA_4196_3F05F97AE712",
 "frameCount": 22,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_4DF9D6EE_47A1_3C1A_41CC_072E2A82BC5E_0_HS_2_0.png",
   "width": 460,
   "height": 690,
   "class": "ImageResourceLevel"
  }
 ],
 "id": "AnimatedImageResource_40FD2D36_51C8_E6B7_41D2_80C373711086",
 "frameCount": 22,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_4DF9D6EE_47A1_3C1A_41CC_072E2A82BC5E_0_HS_3_0.png",
   "width": 460,
   "height": 690,
   "class": "ImageResourceLevel"
  }
 ],
 "id": "AnimatedImageResource_40FD0D36_51C8_E6B7_41D2_CA4B77CB6690",
 "frameCount": 22,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_4DF9D6EE_47A1_3C1A_41CC_072E2A82BC5E_0_HS_4_0.png",
   "width": 460,
   "height": 690,
   "class": "ImageResourceLevel"
  }
 ],
 "id": "AnimatedImageResource_40FD5D36_51C8_E6B7_41C0_3DD9D3C89809",
 "frameCount": 22,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_4DF9D6EE_47A1_3C1A_41CC_072E2A82BC5E_0_HS_5_0.png",
   "width": 460,
   "height": 690,
   "class": "ImageResourceLevel"
  }
 ],
 "id": "AnimatedImageResource_4AF7CB5E_5CA7_69BF_41D2_D5D671F5E1F6",
 "frameCount": 22,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_4CD2EEC2_47A1_2C0A_41CF_574951DEA940_0_HS_0_0.png",
   "width": 800,
   "height": 1200,
   "class": "ImageResourceLevel"
  }
 ],
 "id": "AnimatedImageResource_50AEB28B_47FE_D419_41D0_F026778704C9",
 "frameCount": 24,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_4DF90A77_47A1_5409_41A8_59DA1174DEBE_0_HS_0_0.png",
   "width": 1000,
   "height": 660,
   "class": "ImageResourceLevel"
  }
 ],
 "id": "AnimatedImageResource_5DDD5EFF_47E7_EDFA_41B2_2204F349A974",
 "frameCount": 22,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_4DF90A77_47A1_5409_41A8_59DA1174DEBE_0_HS_1_0.png",
   "width": 800,
   "height": 1200,
   "class": "ImageResourceLevel"
  }
 ],
 "id": "AnimatedImageResource_5DDEBEFF_47E7_EDFA_41C7_9FA9B06934A5",
 "frameCount": 24,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_4DF90A77_47A1_5409_41A8_59DA1174DEBE_0_HS_2_0.png",
   "width": 460,
   "height": 690,
   "class": "ImageResourceLevel"
  }
 ],
 "id": "AnimatedImageResource_40FC4D37_51C8_E6B5_41BD_F72ACB883E6E",
 "frameCount": 22,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_4DF90A77_47A1_5409_41A8_59DA1174DEBE_0_HS_3_0.png",
   "width": 460,
   "height": 690,
   "class": "ImageResourceLevel"
  }
 ],
 "id": "AnimatedImageResource_40F3AD38_51C8_E6BB_41C3_1CC2B357B3EF",
 "frameCount": 22,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_4DF90A77_47A1_5409_41A8_59DA1174DEBE_0_HS_4_0.png",
   "width": 460,
   "height": 690,
   "class": "ImageResourceLevel"
  }
 ],
 "id": "AnimatedImageResource_4AF4DB65_5CA7_698D_41C2_426E5749C25A",
 "frameCount": 22,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_4DF3FD2D_47A1_EC19_41AA_50A600976861_0_HS_0_0.png",
   "width": 1000,
   "height": 660,
   "class": "ImageResourceLevel"
  }
 ],
 "id": "AnimatedImageResource_5DC25EFD_47E7_EDFE_41D1_745E975E9137",
 "frameCount": 22,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_4DF3FD2D_47A1_EC19_41AA_50A600976861_0_HS_1_0.png",
   "width": 1000,
   "height": 660,
   "class": "ImageResourceLevel"
  }
 ],
 "id": "AnimatedImageResource_5DC3BEFD_47E7_EDFE_41B3_A350F0CA9F20",
 "frameCount": 22,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_4DF3FD2D_47A1_EC19_41AA_50A600976861_0_HS_2_0.png",
   "width": 800,
   "height": 1200,
   "class": "ImageResourceLevel"
  }
 ],
 "id": "AnimatedImageResource_5DC3FEFD_47E7_EDFE_41C9_7F233CE40C31",
 "frameCount": 24,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_4DF3FD2D_47A1_EC19_41AA_50A600976861_0_HS_3_0.png",
   "width": 460,
   "height": 690,
   "class": "ImageResourceLevel"
  }
 ],
 "id": "AnimatedImageResource_5F258720_51CB_8B68_4190_B65C520CD6BB",
 "frameCount": 22,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_4DF3FD2D_47A1_EC19_41AA_50A600976861_0_HS_4_0.png",
   "width": 460,
   "height": 690,
   "class": "ImageResourceLevel"
  }
 ],
 "id": "AnimatedImageResource_5F3EA722_51CB_8B68_41D2_3861D96565E6",
 "frameCount": 22,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_4DF3FD2D_47A1_EC19_41AA_50A600976861_0_HS_5_0.png",
   "width": 460,
   "height": 690,
   "class": "ImageResourceLevel"
  }
 ],
 "id": "AnimatedImageResource_5F3F2723_51CB_8B68_41C5_68A7F22ACF0F",
 "frameCount": 22,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_4DF3FD2D_47A1_EC19_41AA_50A600976861_0_HS_6_0.png",
   "width": 460,
   "height": 690,
   "class": "ImageResourceLevel"
  }
 ],
 "id": "AnimatedImageResource_4B13A805_5CA1_3782_41D0_F3CAF34E6590",
 "frameCount": 22,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_4DF3FD2D_47A1_EC19_41AA_50A600976861_0_HS_7_0.png",
   "width": 800,
   "height": 1200,
   "class": "ImageResourceLevel"
  }
 ],
 "id": "AnimatedImageResource_4B141805_5CA1_3782_41D0_9A83E8FD0D7F",
 "frameCount": 24,
 "class": "AnimatedImageResource"
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_523AC6EF_47E2_FC1A_4196_C20CDAE80110",
 "backgroundOpacity": 0.8,
 "width": 36,
 "scrollBarVisible": "rollOver",
 "left": "0%",
 "overflow": "scroll",
 "scrollBarMargin": 2,
 "paddingRight": 0,
 "paddingLeft": 0,
 "borderRadius": 0,
 "backgroundColorRatios": [
  0
 ],
 "propagateClick": true,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "top": "0%",
 "verticalAlign": "top",
 "backgroundColor": [
  "#FFFFFF"
 ],
 "minWidth": 1,
 "layout": "absolute",
 "height": "100%",
 "class": "Container",
 "borderSize": 0,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "gap": 10,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "Container black"
 },
 "shadow": false
},
{
 "horizontalAlign": "center",
 "maxHeight": 50,
 "maxWidth": 50,
 "id": "IconButton_523AF6EF_47E2_FC1A_41CC_582EB9D3BE74",
 "backgroundOpacity": 0,
 "width": 44,
 "left": 10,
 "paddingRight": 0,
 "paddingLeft": 0,
 "borderRadius": 0,
 "minHeight": 1,
 "rollOverIconURL": "skin/IconButton_523AF6EF_47E2_FC1A_41CC_582EB9D3BE74_rollover.png",
 "propagateClick": true,
 "top": "40%",
 "verticalAlign": "middle",
 "bottom": "40%",
 "minWidth": 1,
 "mode": "push",
 "class": "IconButton",
 "borderSize": 0,
 "transparencyActive": true,
 "paddingTop": 0,
 "paddingBottom": 0,
 "click": "this.setComponentVisibility(this.Container_523AE6EF_47E2_FC1A_41C8_023AA8332FE8, true, 0, this.effect_4CD06BFB_5705_AD47_41BD_DD626E481855, 'showEffect', false); this.setComponentVisibility(this.Container_523AD6EF_47E2_FC1A_4181_012BF248BFA6, false, 0, this.effect_4DE9D19D_5705_5DFD_41C8_A84F2FF661E6, 'hideEffect', false)",
 "iconURL": "skin/IconButton_523AF6EF_47E2_FC1A_41CC_582EB9D3BE74.png",
 "data": {
  "name": "IconButton arrow"
 },
 "shadow": false,
 "cursor": "hand"
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_523906EF_47E2_FC1A_41CD_01902B4883E5",
 "backgroundOpacity": 0.89,
 "width": 300,
 "scrollBarVisible": "rollOver",
 "left": "0%",
 "overflow": "scroll",
 "children": [
  "this.Image_523936EF_47E2_FC1A_41C6_F36B105EF6C5",
  "this.Container_523926EF_47E2_FC1A_419F_784A0A745096",
  "this.Container_523836F0_47E2_FC06_41BC_DEFB0A6D32EB"
 ],
 "scrollBarMargin": 2,
 "paddingRight": 40,
 "paddingLeft": 40,
 "borderRadius": 0,
 "backgroundColorRatios": [
  0
 ],
 "propagateClick": true,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "top": "0%",
 "verticalAlign": "top",
 "backgroundColor": [
  "#FFFFFF"
 ],
 "minWidth": 1,
 "layout": "absolute",
 "height": "100%",
 "click": "this.openLink('https://wa.me/62895365221814 ', '_blank')",
 "class": "Container",
 "borderSize": 0,
 "paddingTop": 40,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 40,
 "gap": 10,
 "contentOpaque": false,
 "data": {
  "name": "Container"
 },
 "shadow": false,
 "scrollBarColor": "#000000"
},
{
 "horizontalAlign": "center",
 "maxHeight": 50,
 "maxWidth": 50,
 "id": "IconButton_5238A6F0_47E2_FC06_41C0_03C8CEEE075C",
 "backgroundOpacity": 0,
 "width": 44,
 "right": 9,
 "paddingRight": 0,
 "paddingLeft": 0,
 "borderRadius": 0,
 "minHeight": 1,
 "rollOverIconURL": "skin/IconButton_5238A6F0_47E2_FC06_41C0_03C8CEEE075C_rollover.png",
 "propagateClick": true,
 "top": "40%",
 "verticalAlign": "middle",
 "bottom": "40%",
 "minWidth": 1,
 "mode": "push",
 "class": "IconButton",
 "transparencyActive": true,
 "paddingTop": 0,
 "paddingBottom": 0,
 "click": "this.setComponentVisibility(this.Container_523AE6EF_47E2_FC1A_41C8_023AA8332FE8, false, 0, this.effect_62AD73E7_74A7_9CF6_41C5_55E9CFDD3B7E, 'hideEffect', false); this.setComponentVisibility(this.Container_523AD6EF_47E2_FC1A_4181_012BF248BFA6, true, 0, this.effect_4E3E2032_5705_DAC6_41CE_6A6E562AB368, 'showEffect', false)",
 "borderSize": 0,
 "iconURL": "skin/IconButton_5238A6F0_47E2_FC06_41C0_03C8CEEE075C.png",
 "data": {
  "name": "IconButton collapse"
 },
 "shadow": false,
 "cursor": "hand"
},
{
 "horizontalAlign": "left",
 "maxHeight": 1095,
 "maxWidth": 1095,
 "id": "Image_523936EF_47E2_FC1A_41C6_F36B105EF6C5",
 "backgroundOpacity": 0,
 "left": "20.91%",
 "width": "55.909%",
 "borderRadius": 0,
 "url": "skin/Image_523936EF_47E2_FC1A_41C6_F36B105EF6C5.png",
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 30,
 "propagateClick": true,
 "top": "0.15%",
 "height": "15.878%",
 "verticalAlign": "top",
 "minWidth": 40,
 "class": "Image",
 "borderSize": 0,
 "paddingTop": 0,
 "paddingBottom": 0,
 "scaleMode": "fit_inside",
 "data": {
  "name": "Image Company"
 },
 "shadow": false
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_523926EF_47E2_FC1A_419F_784A0A745096",
 "backgroundOpacity": 0,
 "children": [
  "this.Container_5239C6F0_47E2_FC06_41CD_7E93F988BC8A",
  "this.HTMLText_733B06A4_6141_0DB7_41B0_E3910EA42CAE",
  "this.Container_523996EF_47E2_FC1A_41CC_F5968304DF85",
  "this.HTMLText_71DF1D20_6141_3CAF_41D4_0D53DD618729",
  "this.Container_5239E6F0_47E2_FC06_41BC_87B3E2B255BF",
  "this.HTMLText_70B8C83C_6143_0490_41CB_18EAFC660DEF",
  "this.Container_523806F0_47E2_FC06_41D1_402EB0126DA0",
  "this.ThumbnailList_4C763F5C_5CA2_E983_41D0_590C9E5FED74"
 ],
 "scrollBarVisible": "rollOver",
 "left": "0%",
 "overflow": "scroll",
 "width": "100%",
 "scrollBarMargin": 2,
 "paddingRight": 0,
 "paddingLeft": 0,
 "borderRadius": 0,
 "minHeight": 1,
 "propagateClick": true,
 "top": "20.79%",
 "bottom": "13.7%",
 "scrollBarWidth": 10,
 "verticalAlign": "middle",
 "minWidth": 1,
 "layout": "vertical",
 "class": "Container",
 "borderSize": 0,
 "paddingTop": 0,
 "paddingBottom": 0,
 "gap": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "-Container buttons"
 },
 "shadow": false
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_523836F0_47E2_FC06_41BC_DEFB0A6D32EB",
 "backgroundOpacity": 0,
 "children": [
  "this.Container_523826F0_47E2_FC06_41A6_1C23DAF3C4B8",
  "this.Container_523856F0_47E2_FC06_41C4_C1DB32EA4990",
  "this.Image_72C97135_61DF_395C_41D2_CFC9187D83A7"
 ],
 "scrollBarVisible": "rollOver",
 "left": "0%",
 "right": "0%",
 "scrollBarMargin": 2,
 "paddingRight": 0,
 "paddingLeft": 0,
 "borderRadius": 0,
 "overflow": "scroll",
 "minHeight": 1,
 "propagateClick": true,
 "verticalAlign": "bottom",
 "bottom": "0%",
 "scrollBarWidth": 10,
 "height": 94,
 "minWidth": 1,
 "layout": "vertical",
 "class": "Container",
 "borderSize": 0,
 "paddingTop": 0,
 "paddingBottom": 0,
 "gap": 10,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "-Container footer"
 },
 "shadow": false
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_5239C6F0_47E2_FC06_41CD_7E93F988BC8A",
 "backgroundOpacity": 0.3,
 "width": "100%",
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "height": 1,
 "verticalAlign": "top",
 "minWidth": 1,
 "layout": "absolute",
 "backgroundColor": [
  "#11A074",
  "#FFFFFF"
 ],
 "class": "Container",
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "gap": 10,
 "borderSize": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "line"
 },
 "shadow": false
},
{
 "scrollBarOpacity": 0.5,
 "id": "HTMLText_733B06A4_6141_0DB7_41B0_E3910EA42CAE",
 "backgroundOpacity": 0,
 "width": "100%",
 "scrollBarVisible": "rollOver",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "paddingLeft": 10,
 "paddingRight": 10,
 "minHeight": 1,
 "borderColor": "#000000",
 "propagateClick": false,
 "height": "15.998%",
 "minWidth": 1,
 "scrollBarWidth": 10,
 "class": "HTMLText",
 "paddingTop": 10,
 "paddingBottom": 10,
 "borderSize": 3,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#b1d236;font-size:17px;font-family:'Constantia';\"><I>Senin-Sabtu : </I></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#11a074;font-size:17px;font-family:'Constantia';\"><I>08.00-14.00 WIB</I></SPAN></SPAN></DIV></div>",
 "scrollBarColor": "#000000",
 "data": {
  "name": "HTMLText1580"
 },
 "shadow": false
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_523996EF_47E2_FC1A_41CC_F5968304DF85",
 "backgroundOpacity": 0.3,
 "width": "100%",
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "height": 1,
 "verticalAlign": "top",
 "minWidth": 1,
 "layout": "absolute",
 "backgroundColor": [
  "#11A074",
  "#FFFFFF"
 ],
 "class": "Container",
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "gap": 10,
 "borderSize": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "line"
 },
 "shadow": false
},
{
 "scrollBarOpacity": 0.5,
 "id": "HTMLText_71DF1D20_6141_3CAF_41D4_0D53DD618729",
 "backgroundOpacity": 0,
 "width": "100%",
 "scrollBarVisible": "rollOver",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "paddingLeft": 10,
 "paddingRight": 10,
 "minHeight": 1,
 "borderColor": "#000000",
 "propagateClick": false,
 "height": "15.998%",
 "minWidth": 1,
 "scrollBarWidth": 10,
 "class": "HTMLText",
 "paddingTop": 10,
 "paddingBottom": 10,
 "click": "this.openLink('https://wa.me/62895365221814 ', '_blank')",
 "borderSize": 3,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#f3a22e;\"><A HREF=\"https://wa.me/62895365221814 \" TARGET=\"_blank\" STYLE=\"text-decoration:none; color:inherit;\"><SPAN STYLE=\"color:#b1d236;font-size:17px;font-family:'Constantia';\"><I>Reservasi &amp; Konsultasi :</I></SPAN></A></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#f3a22e;\"><A HREF=\"https://wa.me/62895365221814 \" TARGET=\"_blank\" STYLE=\"text-decoration:none; color:inherit;\"><SPAN STYLE=\"color:#11a074;font-size:17px;font-family:'Constantia';\"><I>0895365221814 (WA only)</I></SPAN></A></SPAN></SPAN></DIV></div>",
 "data": {
  "name": "HTMLText1580"
 },
 "shadow": false,
 "scrollBarColor": "#000000"
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_5239E6F0_47E2_FC06_41BC_87B3E2B255BF",
 "backgroundOpacity": 0.3,
 "width": "100%",
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "height": 1,
 "verticalAlign": "top",
 "minWidth": 1,
 "layout": "absolute",
 "backgroundColor": [
  "#11A074",
  "#11A074"
 ],
 "class": "Container",
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "gap": 10,
 "borderSize": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "line"
 },
 "shadow": false
},
{
 "scrollBarOpacity": 0.5,
 "id": "HTMLText_70B8C83C_6143_0490_41CB_18EAFC660DEF",
 "backgroundOpacity": 0,
 "width": "100%",
 "scrollBarVisible": "rollOver",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "paddingLeft": 10,
 "paddingRight": 10,
 "minHeight": 1,
 "borderColor": "#000000",
 "propagateClick": false,
 "height": "17.714%",
 "minWidth": 1,
 "scrollBarWidth": 10,
 "class": "HTMLText",
 "paddingTop": 10,
 "paddingBottom": 10,
 "click": "this.openLink('https://goo.gl/maps/R1Mhi8gZzwLTbLwu8', '_blank')",
 "borderSize": 3,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#f3a22e;\"><A HREF=\"https://goo.gl/maps/R1Mhi8gZzwLTbLwu8\" TARGET=\"_blank\" STYLE=\"text-decoration:none; color:inherit;\"><SPAN STYLE=\"color:#b1d236;font-size:17px;font-family:'Constantia';\"><I>Jl. RA. Rukmini RT 16 RW 03 Bawu, Batealit, Jepara</I></SPAN></A></SPAN></SPAN></DIV></div>",
 "data": {
  "name": "HTMLText1580"
 },
 "shadow": false,
 "scrollBarColor": "#000000"
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_523806F0_47E2_FC06_41D1_402EB0126DA0",
 "backgroundOpacity": 0.3,
 "width": "100%",
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "height": 1,
 "verticalAlign": "top",
 "minWidth": 1,
 "layout": "absolute",
 "backgroundColor": [
  "#11A074",
  "#11A074"
 ],
 "class": "Container",
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "gap": 10,
 "borderSize": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "line"
 },
 "shadow": false
},
{
 "layout": "vertical",
 "horizontalAlign": "left",
 "itemLabelFontWeight": "normal",
 "scrollBarVisible": "rollOver",
 "id": "ThumbnailList_4C763F5C_5CA2_E983_41D0_590C9E5FED74",
 "backgroundOpacity": 0,
 "itemThumbnailHeight": 75,
 "width": 217,
 "itemThumbnailShadowBlurRadius": 8,
 "itemThumbnailScaleMode": "fit_outside",
 "itemBorderRadius": 0,
 "itemVerticalAlign": "middle",
 "itemThumbnailShadowHorizontalLength": 3,
 "scrollBarMargin": 2,
 "itemLabelFontSize": 14,
 "borderRadius": 5,
 "itemPaddingLeft": 3,
 "paddingLeft": 20,
 "paddingRight": 20,
 "itemLabelPosition": "bottom",
 "minHeight": 20,
 "scrollBarWidth": 10,
 "itemThumbnailShadowVerticalLength": 3,
 "propagateClick": false,
 "itemLabelGap": 9,
 "itemBackgroundColorDirection": "vertical",
 "verticalAlign": "top",
 "itemOpacity": 1,
 "itemThumbnailShadow": true,
 "height": "42.886%",
 "playList": "this.ThumbnailList_4C763F5C_5CA2_E983_41D0_590C9E5FED74_playlist",
 "itemThumbnailShadowSpread": 1,
 "minWidth": 20,
 "itemThumbnailWidth": 75,
 "itemBackgroundColor": [],
 "gap": 10,
 "itemThumbnailOpacity": 1,
 "borderSize": 0,
 "class": "ThumbnailList",
 "itemPaddingBottom": 3,
 "itemHorizontalAlign": "center",
 "itemPaddingTop": 3,
 "selectedItemLabelFontWeight": "bold",
 "itemPaddingRight": 3,
 "itemThumbnailShadowColor": "#000000",
 "itemLabelFontStyle": "normal",
 "paddingBottom": 10,
 "itemBackgroundColorRatios": [],
 "rollOverItemBackgroundOpacity": 0,
 "paddingTop": 10,
 "itemLabelHorizontalAlign": "center",
 "rollOverItemLabelFontWeight": "normal",
 "itemMode": "normal",
 "itemThumbnailShadowOpacity": 0.54,
 "scrollBarColor": "#000000",
 "data": {
  "name": "ThumbnailList35762"
 },
 "itemLabelFontColor": "#B1D236",
 "shadow": false,
 "itemThumbnailBorderRadius": 50,
 "itemLabelTextDecoration": "none",
 "itemBackgroundOpacity": 0,
 "itemLabelFontFamily": "Arial",
 "selectedItemLabelFontColor": "#11A074",
 "scrollBarOpacity": 0.5
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_523826F0_47E2_FC06_41A6_1C23DAF3C4B8",
 "backgroundOpacity": 1,
 "width": 40,
 "scrollBarVisible": "rollOver",
 "overflow": "visible",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "backgroundColorRatios": [
  0
 ],
 "propagateClick": true,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "verticalAlign": "top",
 "height": 2,
 "minWidth": 1,
 "layout": "horizontal",
 "backgroundColor": [
  "#B1D236"
 ],
 "class": "Container",
 "borderSize": 0,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "gap": 10,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "blue line"
 },
 "shadow": false,
 "visible": false
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_523856F0_47E2_FC06_41C4_C1DB32EA4990",
 "backgroundOpacity": 0,
 "children": [
  "this.IconButton_507A2FB1_47E1_2C09_41BB_F46A200D03E4",
  "this.IconButton_523876F0_47E2_FC06_41C7_80F55EB340DD",
  "this.IconButton_523896F0_47E2_FC06_41CE_86406FA85834",
  "this.IconButton_523886F0_47E2_FC06_41A5_8AA1081CECC6"
 ],
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "width": "100%",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "height": 39,
 "verticalAlign": "middle",
 "minWidth": 1,
 "layout": "horizontal",
 "class": "Container",
 "paddingTop": 0,
 "paddingBottom": 0,
 "gap": 16,
 "borderSize": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "-Container settings"
 },
 "shadow": false
},
{
 "horizontalAlign": "center",
 "maxHeight": 358,
 "maxWidth": 2676,
 "id": "Image_72C97135_61DF_395C_41D2_CFC9187D83A7",
 "backgroundOpacity": 0,
 "width": "80%",
 "borderRadius": 0,
 "url": "skin/Image_72C97135_61DF_395C_41D2_CFC9187D83A7.png",
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 1,
 "propagateClick": false,
 "height": "27.66%",
 "verticalAlign": "middle",
 "minWidth": 1,
 "class": "Image",
 "paddingTop": 0,
 "paddingBottom": 0,
 "click": "this.openLink('https://virtualreality.digidaxa.com/', '_blank')",
 "borderSize": 0,
 "scaleMode": "fit_inside",
 "data": {
  "name": "Image11095"
 },
 "shadow": false,
 "cursor": "hand"
}],
 "class": "Player",
 "backgroundPreloadEnabled": true,
 "paddingTop": 0,
 "paddingBottom": 0,
 "gap": 10,
 "borderSize": 0,
 "height": "100%",
 "contentOpaque": false,
 "scripts": {
  "getGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios != undefined && audio.get('id') in audios){ audio = audios[audio.get('id')]; } return audio; },
  "setPanoramaCameraWithCurrentSpot": function(playListItem){  var currentPlayer = this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer == undefined){ return; } var playerClass = currentPlayer.get('class'); if(playerClass != 'PanoramaPlayer' && playerClass != 'Video360Player'){ return; } var fromMedia = currentPlayer.get('panorama'); if(fromMedia == undefined) { fromMedia = currentPlayer.get('video'); } var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, fromMedia); this.startPanoramaWithCamera(panorama, newCamera); },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){  if(w.get('visible') == true){ return; } var closeFunction = function(){ clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function(){ w.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){  var endFunction = function(){ if(playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "setStartTimeVideoSync": function(video, player){  this.setStartTimeVideo(video, player.get('currentTime')); },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){  var self = this; var stateChangeFunction = function(event){ if(event.data.state == 'stopped'){ dispose.call(this, true); } }; var onBeginFunction = function() { item.unbind('begin', onBeginFunction, self); var media = item.get('media'); if(media.get('class') != 'Panorama' || (media.get('camera') != undefined && media.get('camera').get('initialSequence') != undefined)){ player.bind('stateChange', stateChangeFunction, self); } }; var changeFunction = function(){ var index = playListDispatcher.get('selectedIndex'); if(index != -1){ indexDispatcher = index; dispose.call(this, false); } }; var disposeCallback = function(){ dispose.call(this, false); }; var dispose = function(forceDispose){ if(!playListDispatcher) return; var media = item.get('media'); if((media.get('class') == 'Video360' || media.get('class') == 'Video') && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if(panoramaSequence && panoramaSequenceIndex != -1){ if(panoramaSequence) { if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){ var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function(event){ initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, this); }; itemDispatcher.bind('end', restoreInitialPositionFunction, this); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } if(player){ item.unbind('begin', onBeginFunction, this); player.unbind('stateChange', stateChangeFunction, this); for(var i = 0; i<buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, this); } } if(sameViewerArea){ var currentMedia = this.getMediaFromPlayer(player); if(currentMedia == undefined || currentMedia == item.get('media')){ playListDispatcher.set('selectedIndex', indexDispatcher); } if(playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, this); } else{ viewerArea.set('visible', viewerVisibility); } playListDispatcher = undefined; }; var mediaDispatcherByParam = mediaDispatcher != undefined; if(!mediaDispatcher){ var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer) { mediaDispatcher = this.getMediaFromPlayer(currentPlayer); } } var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined; if(!playListDispatcher){ playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if(playList.get('selectedIndex') == index || indexDispatcher == -1){ return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var player = item.get('player'); var viewerArea = player.get('viewerArea'); var viewerVisibility = viewerArea.get('visible'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if(sameViewerArea){ if(playList != playListDispatcher){ playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else{ viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if(camera){ panoramaSequence = camera.get('initialSequence'); if(panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var buttons = []; var addButtons = function(property){ var value = player.get(property); if(value == undefined) return; if(Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for(var i = 0; i<buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } if(player != itemDispatcher.get('player') || !mediaDispatcherByParam){ item.bind('begin', onBeginFunction, self); } this.executeFunctionWhenChange(playList, index, disposeCallback); },
  "getOverlays": function(media){  switch(media.get('class')){ case 'Panorama': var overlays = media.get('overlays').concat() || []; var frames = media.get('frames'); for(var j = 0; j<frames.length; ++j){ overlays = overlays.concat(frames[j].get('overlays') || []); } return overlays; case 'Video360': case 'Map': return media.get('overlays') || []; default: return []; } },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){  var self = this; var closed = false; var playerClickFunction = function() { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function(){ zoomImage.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var resizeFunction = function(){ setTimeout(setCloseButtonPosition, 0); }; var loadedFunction = function(){ self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); zoomImage.bind('resize', resizeFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function(){ timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if(toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if(loadedCallback) loadedCallback(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); closed = true; if(timeoutID) clearTimeout(timeoutID); if (timeoutUserInteractionID) clearTimeout(timeoutUserInteractionID); if(autoCloseMilliSeconds) clearAutoClose(); if(hideCallback) hideCallback(); zoomImage.set('visible', false); if(hideEffect && hideEffect.get('duration') > 0){ hideEffect.bind('end', endEffectFunction, this); } else{ zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); zoomImage.unbind('resize', resizeFunction, this); if(toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function() { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function() { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function() { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function() { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if(right < 10) right = 10; if(top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function() { if(timeoutUserInteractionID){ clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else{ closeButton.set('visible', false); } }; var userInteractionEndFunction = function() { if(!closed){ timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function() { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; },
  "changePlayListWithSameSpot": function(playList, newIndex){  var currentIndex = playList.get('selectedIndex'); if (currentIndex >= 0 && newIndex >= 0 && currentIndex != newIndex) { var currentItem = playList.get('items')[currentIndex]; var newItem = playList.get('items')[newIndex]; var currentPlayer = currentItem.get('player'); var newPlayer = newItem.get('player'); if ((currentPlayer.get('class') == 'PanoramaPlayer' || currentPlayer.get('class') == 'Video360Player') && (newPlayer.get('class') == 'PanoramaPlayer' || newPlayer.get('class') == 'Video360Player')) { var newCamera = this.cloneCamera(newItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, currentItem.get('media')); this.startPanoramaWithCamera(newItem.get('media'), newCamera); } } },
  "setOverlayBehaviour": function(overlay, media, action){  var executeFunc = function() { switch(action){ case 'triggerClick': this.triggerOverlay(overlay, 'click'); break; case 'stop': case 'play': case 'pause': overlay[action](); break; case 'togglePlayPause': case 'togglePlayStop': if(overlay.get('state') == 'playing') overlay[action == 'togglePlayPause' ? 'pause' : 'stop'](); else overlay.play(); break; } if(window.overlaysDispatched == undefined) window.overlaysDispatched = {}; var id = overlay.get('id'); window.overlaysDispatched[id] = true; setTimeout(function(){ delete window.overlaysDispatched[id]; }, 2000); }; if(window.overlaysDispatched != undefined && overlay.get('id') in window.overlaysDispatched) return; var playList = this.getPlayListWithMedia(media, true); if(playList != undefined){ var item = this.getPlayListItemByMedia(playList, media); if(playList.get('items').indexOf(item) != playList.get('selectedIndex')){ var beginFunc = function(e){ item.unbind('begin', beginFunc, this); executeFunc.call(this); }; item.bind('begin', beginFunc, this); return; } } executeFunc.call(this); },
  "existsKey": function(key){  return key in window; },
  "cloneCamera": function(camera){  var newCamera = this.rootPlayer.createInstance(camera.get('class')); newCamera.set('id', camera.get('id') + '_copy'); newCamera.set('idleSequence', camera.get('initialSequence')); return newCamera; },
  "setCameraSameSpotAsMedia": function(camera, media){  var player = this.getCurrentPlayerWithMedia(media); if(player != undefined) { var position = camera.get('initialPosition'); position.set('yaw', player.get('yaw')); position.set('pitch', player.get('pitch')); position.set('hfov', player.get('hfov')); } },
  "getMediaFromPlayer": function(player){  switch(player.get('class')){ case 'PanoramaPlayer': return player.get('panorama') || player.get('video'); case 'VideoPlayer': case 'Video360Player': return player.get('video'); case 'PhotoAlbumPlayer': return player.get('photoAlbum'); case 'MapPlayer': return player.get('map'); } },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, stopAudios){  var self = this; var closeFunction = function(){ playList.set('selectedIndex', -1); self.MainViewer.set('toolTipEnabled', true); if(stopAudios) { self.resumeGlobalAudios(); } this.resumePlayers(playersPaused, !stopAudios); if(isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function(){ w.hide(); }; var resizeFunction = function(){ var getWinValue = function(property){ return w.get(property) || 0; }; var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = self.getMediaWidth(media); var mediaHeight = self.getMediaHeight(media); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = getWinValue('footerHeight'); var headerHeight = getWinValue('headerHeight'); if(!headerHeight) { var closeButtonHeight = getWinValue('closeButtonIconHeight') + getWinValue('closeButtonPaddingTop') + getWinValue('closeButtonPaddingBottom'); var titleHeight = self.getPixels(getWinValue('titleFontSize')) + getWinValue('titlePaddingTop') + getWinValue('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += getWinValue('headerPaddingTop') + getWinValue('headerPaddingBottom'); } var contentWindowWidth = windowWidth - getWinValue('bodyPaddingLeft') - getWinValue('bodyPaddingRight') - getWinValue('paddingLeft') - getWinValue('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - getWinValue('bodyPaddingTop') - getWinValue('bodyPaddingBottom') - getWinValue('paddingTop') - getWinValue('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if(parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + getWinValue('bodyPaddingLeft') + getWinValue('bodyPaddingRight') + getWinValue('paddingLeft') + getWinValue('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + getWinValue('bodyPaddingTop') + getWinValue('bodyPaddingBottom') + getWinValue('paddingTop') + getWinValue('paddingBottom'); } if(windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if(windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - getWinValue('actualWidth')) * 0.5); w.set('y', (parentHeight - getWinValue('actualHeight')) * 0.5); }; if(autoCloseWhenFinished){ this.executeFunctionWhenChange(playList, 0, endFunction); } var mediaClass = media.get('class'); var isVideo = mediaClass == 'Video' || mediaClass == 'Video360'; playList.set('selectedIndex', 0); if(isVideo){ this.bind('resize', resizeFunction, this); resizeFunction(); playList.get('items')[0].get('player').play(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); if(stopAudios) { this.pauseGlobalAudios(); } var playersPaused = this.pauseCurrentPlayers(!stopAudios); w.bind('close', closeFunction, this); w.show(this, true); },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){  for(var i = 0; i<players.length; ++i){ var player = players[i]; if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.resumeCamera(); } else{ player.play(); } } },
  "historyGoBack": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.back(); } },
  "stopAndGoCamera": function(camera, ms){  var sequence = camera.get('initialSequence'); sequence.pause(); var timeoutFunction = function(){ sequence.play(); }; setTimeout(timeoutFunction, ms); },
  "getKey": function(key){  return window[key]; },
  "getMediaByName": function(name){  var list = this.getByClassName('Media'); for(var i = 0, count = list.length; i<count; ++i){ var media = list[i]; if((media.get('class') == 'Audio' && media.get('data').label == name) || media.get('label') == name){ return media; } } return undefined; },
  "historyGoForward": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.forward(); } },
  "loadFromCurrentMediaPlayList": function(playList, delta){  var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while(newIndex < 0){ newIndex = totalItems + newIndex; }; if(currentIndex != newIndex){ playList.set('selectedIndex', newIndex); } },
  "getPlayListWithMedia": function(media, onlySelected){  var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(onlySelected && playList.get('selectedIndex') == -1) continue; if(this.getPlayListItemByMedia(playList, media) != undefined) return playList; } return undefined; },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ this.stopGlobalAudio(audio); if(isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if(endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if(audios && audio.get('id') in audios){ audio = audios[audio.get('id')]; if(audio.get('state') != 'playing'){ audio.play(); } return audio; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if(isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if(audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); var stateChangeFunctions = audio.getBindings('stateChange'); for(var i = 0; i<stateChangeFunctions.length; ++i){ var f = stateChangeFunctions[i]; if(typeof f == 'string') f = new Function('event', f); panoramaAudio.bind('stateChange', f, this); } audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } return this.playGlobalAudio(audio, endCallback); },
  "loopAlbum": function(playList, index){  var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function(){ player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){  var changeFunction = function(){ var index = playList.get('selectedIndex'); if(index >= 0){ var beginFunction = function(){ playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function(index){ var media = playListItem.get('media'); var text = media.get('data'); if(!text) text = media.get('label'); setHtml(text); }; var setHtml = function(text){ if(text !== undefined) { htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>'); } else { htmlText.set('html', ''); } }; var playListItem = playList.get('items')[index]; if(htmlText.get('html')){ setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else{ setMediaLabel(index); } } }; var disposeFunction = function(){ htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if(playListItemStopToDispose){ playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); },
  "pauseGlobalAudios": function(caller, exclude){  if (window.pauseGlobalAudiosState == undefined) window.pauseGlobalAudiosState = {}; if (window.pauseGlobalAudiosList == undefined) window.pauseGlobalAudiosList = []; if (caller in window.pauseGlobalAudiosState) { return; } var audios = this.getByClassName('Audio').concat(this.getByClassName('VideoPanoramaOverlay')); if (window.currentGlobalAudios != undefined) audios = audios.concat(Object.values(window.currentGlobalAudios)); var audiosPaused = []; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = 0; j<objAudios.length; ++j) { var a = objAudios[j]; if(audiosPaused.indexOf(a) == -1) audiosPaused.push(a); } } window.pauseGlobalAudiosState[caller] = audiosPaused; for (var i = 0, count = audios.length; i < count; ++i) { var a = audios[i]; if (a.get('state') == 'playing' && (exclude == undefined || exclude.indexOf(a) == -1)) { a.pause(); audiosPaused.push(a); } } },
  "shareWhatsapp": function(url){  window.open('https://api.whatsapp.com/send/?text=' + encodeURIComponent(url), '_blank'); },
  "init": function(){  if(!Object.hasOwnProperty('values')) { Object.values = function(o){ return Object.keys(o).map(function(e) { return o[e]; }); }; } var history = this.get('data')['history']; var playListChangeFunc = function(e){ var playList = e.source; var index = playList.get('selectedIndex'); if(index < 0) return; var id = playList.get('id'); if(!history.hasOwnProperty(id)) history[id] = new HistoryData(playList); history[id].add(index); }; var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i) { var playList = playLists[i]; playList.bind('change', playListChangeFunc, this); } },
  "resumeGlobalAudios": function(caller){  if (window.pauseGlobalAudiosState == undefined || !(caller in window.pauseGlobalAudiosState)) return; var audiosPaused = window.pauseGlobalAudiosState[caller]; delete window.pauseGlobalAudiosState[caller]; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = audiosPaused.length-1; j>=0; --j) { var a = audiosPaused[j]; if(objAudios.indexOf(a) != -1) audiosPaused.splice(j, 1); } } for (var i = 0, count = audiosPaused.length; i<count; ++i) { var a = audiosPaused[i]; if (a.get('state') == 'paused') a.play(); } },
  "registerKey": function(key, value){  window[key] = value; },
  "getPixels": function(value){  var result = new RegExp('((\\+|\\-)?\\d+(\\.\\d*)?)(px|vw|vh|vmin|vmax)?', 'i').exec(value); if (result == undefined) { return 0; } var num = parseFloat(result[1]); var unit = result[4]; var vw = this.rootPlayer.get('actualWidth') / 100; var vh = this.rootPlayer.get('actualHeight') / 100; switch(unit) { case 'vw': return num * vw; case 'vh': return num * vh; case 'vmin': return num * Math.min(vw, vh); case 'vmax': return num * Math.max(vw, vh); default: return num; } },
  "playAudioList": function(audios){  if(audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function(){ if(++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext); }; playNext(); },
  "changeBackgroundWhilePlay": function(playList, index, color){  var stopFunction = function(event){ playListItem.unbind('stop', stopFunction, this); if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){ viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){ viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playListItem.bind('stop', stopFunction, this); } },
  "getComponentByName": function(name){  var list = this.getByClassName('UIComponent'); for(var i = 0, count = list.length; i<count; ++i){ var component = list[i]; var data = component.get('data'); if(data != undefined && data.name == name){ return component; } } return undefined; },
  "getCurrentPlayers": function(){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; },
  "getMediaWidth": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxW=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('width') > maxW) maxW = r.get('width'); } return maxW; }else{ return r.get('width') } default: return media.get('width'); } },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){  var endObject = undefined; var changePlayListFunction = function(event){ if(event.data.previousSelectedIndex == index){ if(changeFunction) changeFunction.call(this); if(endFunction && endObject) endObject.unbind('end', endFunction, this); playList.unbind('change', changePlayListFunction, this); } }; if(endFunction){ var playListItem = playList.get('items')[index]; if(playListItem.get('class') == 'PanoramaPlayListItem'){ var camera = playListItem.get('camera'); if(camera != undefined) endObject = camera.get('initialSequence'); if(endObject == undefined) endObject = camera.get('idleSequence'); } else{ endObject = playListItem.get('media'); } if(endObject){ endObject.bind('end', endFunction, this); } } playList.bind('change', changePlayListFunction, this); },
  "getPanoramaOverlayByName": function(panorama, name){  var overlays = this.getOverlays(panorama); for(var i = 0, count = overlays.length; i<count; ++i){ var overlay = overlays[i]; var data = overlay.get('data'); if(data != undefined && data.label == name){ return overlay; } } return undefined; },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties, stopAudios){  var self = this; var showEndFunction = function() { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function() { if(!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); if(stopAudios) { self.resumeGlobalAudios(); } }; var setCloseButtonPosition = function() { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); if(stopAudios) { this.pauseGlobalAudios(); } popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); },
  "getCurrentPlayerWithMedia": function(media){  var playerClass = undefined; var mediaPropertyName = undefined; switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'panorama'; break; case 'Video360': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'video'; break; case 'PhotoAlbum': playerClass = 'PhotoAlbumPlayer'; mediaPropertyName = 'photoAlbum'; break; case 'Map': playerClass = 'MapPlayer'; mediaPropertyName = 'map'; break; case 'Video': playerClass = 'VideoPlayer'; mediaPropertyName = 'video'; break; }; if(playerClass != undefined) { var players = this.getByClassName(playerClass); for(var i = 0; i<players.length; ++i){ var player = players[i]; if(player.get(mediaPropertyName) == media) { return player; } } } else { return undefined; } },
  "getActivePlayerWithViewer": function(viewerArea){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if(playerClass == 'PanoramaPlayer' && (player.get('panorama') != undefined || player.get('video') != undefined)) return player; else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; },
  "initGA": function(){  var sendFunc = function(category, event, label) { ga('send', 'event', category, event, label); }; var media = this.getByClassName('Panorama'); media = media.concat(this.getByClassName('Video360')); media = media.concat(this.getByClassName('Map')); for(var i = 0, countI = media.length; i<countI; ++i){ var m = media[i]; var mediaLabel = m.get('label'); var overlays = this.getOverlays(m); for(var j = 0, countJ = overlays.length; j<countJ; ++j){ var overlay = overlays[j]; var overlayLabel = overlay.get('data') != undefined ? mediaLabel + ' - ' + overlay.get('data')['label'] : mediaLabel; switch(overlay.get('class')) { case 'HotspotPanoramaOverlay': case 'HotspotMapOverlay': var areas = overlay.get('areas'); for (var z = 0; z<areas.length; ++z) { areas[z].bind('click', sendFunc.bind(this, 'Hotspot', 'click', overlayLabel), this); } break; case 'CeilingCapPanoramaOverlay': case 'TripodCapPanoramaOverlay': overlay.bind('click', sendFunc.bind(this, 'Cap', 'click', overlayLabel), this); break; } } } var components = this.getByClassName('Button'); components = components.concat(this.getByClassName('IconButton')); for(var i = 0, countI = components.length; i<countI; ++i){ var c = components[i]; var componentLabel = c.get('data')['name']; c.bind('click', sendFunc.bind(this, 'Skin', 'click', componentLabel), this); } var items = this.getByClassName('PlayListItem'); var media2Item = {}; for(var i = 0, countI = items.length; i<countI; ++i) { var item = items[i]; var media = item.get('media'); if(!(media.get('id') in media2Item)) { item.bind('begin', sendFunc.bind(this, 'Media', 'play', media.get('label')), this); media2Item[media.get('id')] = item; } } },
  "getPlayListItems": function(media, player){  var itemClass = (function() { switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': return 'PanoramaPlayListItem'; case 'Video360': return 'Video360PlayListItem'; case 'PhotoAlbum': return 'PhotoAlbumPlayListItem'; case 'Map': return 'MapPlayListItem'; case 'Video': return 'VideoPlayListItem'; } })(); if (itemClass != undefined) { var items = this.getByClassName(itemClass); for (var i = items.length-1; i>=0; --i) { var item = items[i]; if(item.get('media') != media || (player != undefined && item.get('player') != player)) { items.splice(i, 1); } } return items; } else { return []; } },
  "pauseGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; } if(audio.get('state') == 'playing') audio.pause(); },
  "isCardboardViewMode": function(){  var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){  var players = this.getCurrentPlayers(); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('state') == 'playing') { if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.pauseCamera(); } else { player.pause(); } } else { players.splice(i, 1); } } return players; },
  "setStartTimeVideo": function(video, time){  var items = this.getPlayListItems(video); var startTimeBackup = []; var restoreStartTimeFunc = function() { for(var i = 0; i<items.length; ++i){ var item = items[i]; item.set('startTime', startTimeBackup[i]); item.unbind('stop', restoreStartTimeFunc, this); } }; for(var i = 0; i<items.length; ++i) { var item = items[i]; var player = item.get('player'); if(player.get('video') == video && player.get('state') == 'playing') { player.seek(time); } else { startTimeBackup.push(item.get('startTime')); item.set('startTime', time); item.bind('stop', restoreStartTimeFunc, this); } } },
  "playGlobalAudio": function(audio, endCallback){  var endFunction = function(){ audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if(endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if(!audios){ audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = audio; if(audio.get('state') == 'playing'){ return audio; } if(!audio.get('loop')){ audio.bind('end', endFunction, this); } audio.play(); return audio; },
  "autotriggerAtStart": function(playList, callback, once){  var onChange = function(event){ callback(); if(once == true) playList.unbind('change', onChange, this); }; playList.bind('change', onChange, this); },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, exclude){  var self = this; var item = playList.get('items')[index]; var media = item.get('media'); var player = item.get('player'); var caller = media.get('id'); var endFunc = function(){ if(playList.get('selectedIndex') != index) { if(hasState){ player.unbind('stateChange', stateChangeFunc, self); } self.resumeGlobalAudios(caller); } }; var stateChangeFunc = function(event){ var state = event.data.state; if(state == 'stopped'){ this.resumeGlobalAudios(caller); } else if(state == 'playing'){ this.pauseGlobalAudios(caller, exclude); } }; var mediaClass = media.get('class'); var hasState = mediaClass == 'Video360' || mediaClass == 'Video'; if(hasState){ player.bind('stateChange', stateChangeFunc, this); } this.pauseGlobalAudios(caller, exclude); this.executeFunctionWhenChange(playList, index, endFunc, endFunc); },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){  var setVisibility = function(visible){ for(var i = 0, length = components.length; i<length; i++){ var component = components[i]; if(component.get('class') == 'HTMLText' && (component.get('html') == '' || component.get('html') == undefined)) { continue; } component.set('visible', visible); } }; if (this.rootPlayer.get('touchDevice') == true){ setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function(){ setVisibility(true); if(timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function(){ var timeoutFunction = function(){ setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){  var resetFunction = function(){ panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); },
  "showPopupPanoramaOverlay": function(popupPanoramaOverlay, closeButtonProperties, imageHD, toggleImage, toggleImageHD, autoCloseMilliSeconds, audio, stopBackgroundAudio){  var self = this; this.MainViewer.set('toolTipEnabled', false); var cardboardEnabled = this.isCardboardViewMode(); if(!cardboardEnabled) { var zoomImage = this.zoomImagePopupPanorama; var showDuration = popupPanoramaOverlay.get('showDuration'); var hideDuration = popupPanoramaOverlay.get('hideDuration'); var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); var popupMaxWidthBackup = popupPanoramaOverlay.get('popupMaxWidth'); var popupMaxHeightBackup = popupPanoramaOverlay.get('popupMaxHeight'); var showEndFunction = function() { var loadedFunction = function(){ if(!self.isCardboardViewMode()) popupPanoramaOverlay.set('visible', false); }; popupPanoramaOverlay.unbind('showEnd', showEndFunction, self); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', 1); self.showPopupImage(imageHD, toggleImageHD, popupPanoramaOverlay.get('popupMaxWidth'), popupPanoramaOverlay.get('popupMaxHeight'), null, null, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedFunction, hideFunction); }; var hideFunction = function() { var restoreShowDurationFunction = function(){ popupPanoramaOverlay.unbind('showEnd', restoreShowDurationFunction, self); popupPanoramaOverlay.set('visible', false); popupPanoramaOverlay.set('showDuration', showDuration); popupPanoramaOverlay.set('popupMaxWidth', popupMaxWidthBackup); popupPanoramaOverlay.set('popupMaxHeight', popupMaxHeightBackup); }; self.resumePlayers(playersPaused, audio == null || !stopBackgroundAudio); var currentWidth = zoomImage.get('imageWidth'); var currentHeight = zoomImage.get('imageHeight'); popupPanoramaOverlay.bind('showEnd', restoreShowDurationFunction, self, true); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', hideDuration); popupPanoramaOverlay.set('popupMaxWidth', currentWidth); popupPanoramaOverlay.set('popupMaxHeight', currentHeight); if(popupPanoramaOverlay.get('visible')) restoreShowDurationFunction(); else popupPanoramaOverlay.set('visible', true); self.MainViewer.set('toolTipEnabled', true); }; if(!imageHD){ imageHD = popupPanoramaOverlay.get('image'); } if(!toggleImageHD && toggleImage){ toggleImageHD = toggleImage; } popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); } else { var hideEndFunction = function() { self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } popupPanoramaOverlay.unbind('hideEnd', hideEndFunction, self); self.MainViewer.set('toolTipEnabled', true); }; var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } popupPanoramaOverlay.bind('hideEnd', hideEndFunction, this, true); } popupPanoramaOverlay.set('visible', true); },
  "shareTwitter": function(url){  window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "syncPlaylists": function(playLists){  var changeToMedia = function(media, playListDispatched){ for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(playList != playListDispatched){ var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media){ if(playList.get('selectedIndex') != j){ playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function(event){ var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if(selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function(event){ var panoramaMapLocation = event.source.get('panoramaMapLocation'); if(panoramaMapLocation){ var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for(var i = 0, count = playLists.length; i<count; ++i){ playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for(var i = 0, count = mapPlayers.length; i<count; ++i){ mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } },
  "shareFacebook": function(url){  window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "getPlayListItemByMedia": function(playList, media){  var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media) return item; } return undefined; },
  "startPanoramaWithCamera": function(media, camera){  if(window.currentPanoramasWithCameraChanged != undefined && window.currentPanoramasWithCameraChanged.indexOf(media) != -1){ return; } var playLists = this.getByClassName('PlayList'); if(playLists.length == 0) return; var restoreItems = []; for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media && (item.get('class') == 'PanoramaPlayListItem' || item.get('class') == 'Video360PlayListItem')){ restoreItems.push({camera: item.get('camera'), item: item}); item.set('camera', camera); } } } if(restoreItems.length > 0) { if(window.currentPanoramasWithCameraChanged == undefined) { window.currentPanoramasWithCameraChanged = [media]; } else { window.currentPanoramasWithCameraChanged.push(media); } var restoreCameraOnStop = function(){ var index = window.currentPanoramasWithCameraChanged.indexOf(media); if(index != -1) { window.currentPanoramasWithCameraChanged.splice(index, 1); } for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); restoreItems[i].item.unbind('stop', restoreCameraOnStop, this); } }; for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.bind('stop', restoreCameraOnStop, this); } } },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){  var enabled = this.get(playerFlag); for(var i in components){ components[i].set('visible', enabled); } },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){  var keepVisibility = this.getKey('keepVisibility_' + component.get('id')); if(keepVisibility) return; this.unregisterKey('visibility_'+component.get('id')); var changeVisibility = function(){ if(effect && propertyEffect){ component.set(propertyEffect, effect); } component.set('visible', visible); if(component.get('class') == 'ViewerArea'){ try{ if(visible) component.restart(); else if(component.get('playbackState') == 'playing') component.pause(); } catch(e){}; } }; var effectTimeoutName = 'effectTimeout_'+component.get('id'); if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){ var effectTimeout = window[effectTimeoutName]; if(effectTimeout instanceof Array){ for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) } }else{ clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if(visible == component.get('visible') && !ignoreClearTimeout) return; if(applyAt && applyAt > 0){ var effectTimeout = setTimeout(function(){ if(window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if(arrayTimeoutVal.length == 0){ delete window[effectTimeoutName]; } }else{ delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if(window.hasOwnProperty(effectTimeoutName)){ window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; }else{ window[effectTimeoutName] = effectTimeout; } } else{ changeVisibility(); } },
  "keepComponentVisibility": function(component, keep){  var key = 'keepVisibility_' + component.get('id'); var value = this.getKey(key); if(value == undefined && keep) { this.registerKey(key, keep); } else if(value != undefined && !keep) { this.unregisterKey(key); } },
  "setPanoramaCameraWithSpot": function(playListItem, yaw, pitch){  var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); var initialPosition = newCamera.get('initialPosition'); initialPosition.set('yaw', yaw); initialPosition.set('pitch', pitch); this.startPanoramaWithCamera(panorama, newCamera); },
  "updateVideoCues": function(playList, index){  var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if(video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function(){ if(playList.get('selectedIndex') != index){ video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function(event){ var activeCues = event.data.activeCues; for(var i = 0, count = cues.length; i<count; ++i){ var cue = cues[i]; if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){ cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); },
  "fixTogglePlayPauseButton": function(player){  var state = player.get('state'); var buttons = player.get('buttonPlayPause'); if(typeof buttons !== 'undefined' && player.get('state') == 'playing'){ if(!Array.isArray(buttons)) buttons = [buttons]; for(var i = 0; i<buttons.length; ++i) buttons[i].set('pressed', true); } },
  "setMainMediaByIndex": function(index){  var item = undefined; if(index >= 0 && index < this.mainPlayList.get('items').length){ this.mainPlayList.set('selectedIndex', index); item = this.mainPlayList.get('items')[index]; } return item; },
  "setMainMediaByName": function(name){  var items = this.mainPlayList.get('items'); for(var i = 0; i<items.length; ++i){ var item = items[i]; if(item.get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return item; } } },
  "getMediaHeight": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxH=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('height') > maxH) maxH = r.get('height'); } return maxH; }else{ return r.get('height') } default: return media.get('height'); } },
  "stopGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; if(audio){ delete audios[audio.get('id')]; if(Object.keys(audios).length == 0){ window.currentGlobalAudios = undefined; } } } if(audio) audio.stop(); },
  "triggerOverlay": function(overlay, eventName){  if(overlay.get('areas') != undefined) { var areas = overlay.get('areas'); for(var i = 0; i<areas.length; ++i) { areas[i].trigger(eventName); } } else { overlay.trigger(eventName); } },
  "openLink": function(url, name){  if(url == location.href) { return; } var isElectron = (window && window.process && window.process.versions && window.process.versions['electron']) || (navigator && navigator.userAgent && navigator.userAgent.indexOf('Electron') >= 0); if (name == '_blank' && isElectron) { if (url.startsWith('/')) { var r = window.location.href.split('/'); r.pop(); url = r.join('/') + url; } var extension = url.split('.').pop().toLowerCase(); if(extension != 'pdf' || url.startsWith('file://')) { var shell = window.require('electron').shell; shell.openExternal(url); } else { window.open(url, name); } } else if(isElectron && (name == '_top' || name == '_self')) { window.location = url; } else { var newWindow = window.open(url, name); newWindow.focus(); } },
  "unregisterKey": function(key){  delete window[key]; }
 },
 "buttonToggleFullscreen": "this.IconButton_523876F0_47E2_FC06_41C7_80F55EB340DD",
 "data": {
  "name": "Player455"
 },
 "mouseWheelEnabled": true,
 "shadow": false,
 "downloadEnabled": true,
 "defaultVRPointer": "laser",
 "scrollBarColor": "#000000"
};

    
    function HistoryData(playList) {
        this.playList = playList;
        this.list = [];
        this.pointer = -1;
    }

    HistoryData.prototype.add = function(index){
        if(this.pointer < this.list.length && this.list[this.pointer] == index) {
            return;
        }
        ++this.pointer;
        this.list.splice(this.pointer, this.list.length - this.pointer, index);
    };

    HistoryData.prototype.back = function(){
        if(!this.canBack()) return;
        this.playList.set('selectedIndex', this.list[--this.pointer]);
    };

    HistoryData.prototype.forward = function(){
        if(!this.canForward()) return;
        this.playList.set('selectedIndex', this.list[++this.pointer]);
    };

    HistoryData.prototype.canBack = function(){
        return this.pointer > 0;
    };

    HistoryData.prototype.canForward = function(){
        return this.pointer >= 0 && this.pointer < this.list.length-1;
    };
    //

    if(script.data == undefined)
        script.data = {};
    script.data["history"] = {};    //playListID -> HistoryData

    TDV.PlayerAPI.defineScript(script);
})();
