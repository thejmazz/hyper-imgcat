exports.middleware = (store) => (next) => (action) => {
  if (action.type === 'SESSION_ADD_DATA') {
    const { data } = action

    if (data.indexOf('IMGCAT ') !== -1) {
      const imageName = data.replace(/IMGCAT\ /, '').trim()
      const fileUrl = 'file://' + imageName

      const { activeUid } = store.getState().sessions

      store.dispatch({
        type: 'SESSION_URL_SET',
        uid: activeUid,
        url: fileUrl
      })
    } else {
      next(action)
    }
  } else {
    next(action)
  }
}

// exports.reduceUI = (state, action) => {
//   switch (action.type) {
//     case 'IMGCAT':
//       console.log('Got IMGCAT action')
//       return state.set('currentImage', action.payload)
//   }
//   return state
// }
//
// exports.mapTermsState = (state, map) => {
//   console.log('in mapTermsState: ', state.ui.currentImage)
//   console.log('map:', map)
//   return Object.assign(map, {
//     currentImage: state.ui.currentImage ? state.ui.currentImage : 'HAHA'
//   })
// }
//
// exports.getTermProps = (uid, parentProps, props) => {
//   // currentImage in neither of these
//   console.log('parentProps: ', parentProps)
//   console.log('props: ', props)
//
//   return Object.assign(props, {})
// }
//
// exports.decorateTerm = (Term, { React }) => {
//   return class extends React.Component {
//     constructor(props, context) {
//       super(props, context)
//
//       this._onTerminal = this._onTerminal.bind(this)
//       this._drawFrame = this._drawFrame.bind(this)
//       this._resizeCanvas = this._resizeCanvas.bind(this)
//     }
//
//     _onTerminal (term) {
//       if (this.props.onTerminal) this.props.onTerminal(term)
//
//       this._window = term.document_.defaultView
//
//       // console.log(term.document_.body)
//       this._initCanvas()
//     }
//
//     _initCanvas () {
//       this._canvas = document.createElement('canvas')
//       this._canvas.style.position = 'absolute'
//       this._canvas.style.top = '0'
//       this._canvas.style.pointerEvents = 'none'
//       this._canvas.style.opacity = 0.5
//
//
//       this._canvasContext = this._canvas.getContext('2d')
//       this._canvas.width = window.innerWidth
//       this._canvas.height = window.innerHeight
//       document.body.appendChild(this._canvas)
//       this._window.requestAnimationFrame(this._drawFrame)
//       this._window.addEventListener('resize', this._resizeCanvas)
//     }
//
//     _resizeCanvas () {
//       this._canvas.width = window.innerWidth;
//       this._canvas.height = window.innerHeight;
//     }
//
//     _drawFrame () {
//       const img = document.createElement('img')
//       // img.src = 'https://s-media-cache-ak0.pinimg.com/736x/77/3f/a7/773fa780bb2814f3576baea1dcce2238.jpg'
//       img.src = '/Users/jmazz/Desktop/grid-particles.png'
//
//       // this._canvasContext.drawImage(img, 0, 0)
//
//       // this._canvasContext.fillStyle = 'rgba(255, 0, 0, 0.5)'
//       // this._canvasContext.fillRect(0, 0, 100, 100)
//
//       this._window.requestAnimationFrame(this._drawFrame)
//     }
//
//     render() {
//       const h = React.createElement
//
//       console.log(this.props.currentImage)
//
//       // const canvas = document.createElement('canvas')
//
//       // const aDiv = document.createElement('div')
//       // aDiv.innerHTML = 'SOME DIV'
//       // document.body.appendChild(aDiv)
//
//       // console.log('renderig term')
//       // console.log(this.props)
//
//       return h(Term, Object.assign({}, this.props, {
//         onTerminal: this._onTerminal
//       }))
//     }
//   }
// }
