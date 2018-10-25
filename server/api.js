module.exports = function createApi() {
  return (req, res) => {
    const articles = [
      {
        title: 'Hello world',
        content: `
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin dictum id augue eu tempor. Phasellus tincidunt ante eu nisl convallis ornare. Nam hendrerit nibh justo, in tristique justo maximus et. Curabitur venenatis commodo risus quis mollis. Nullam pellentesque tellus lacus, sed pulvinar nulla tristique nec. Phasellus fermentum dictum ex sit amet tempus. Ut faucibus nisl arcu, vitae mollis ex consectetur ut. Proin vitae lacus eros. Nam et pharetra turpis. Donec malesuada sollicitudin tortor, id tempor nunc tincidunt quis. Nunc efficitur neque ante, sit amet posuere ligula viverra at. Cras iaculis eu nisl et sollicitudin. Suspendisse blandit eleifend lorem blandit cursus. Nunc vehicula nunc vitae orci lobortis, ac volutpat ipsum sagittis.

          Integer ac cursus risus, at pellentesque leo. Nulla enim risus, condimentum in consectetur vel, finibus in lacus. Mauris lobortis vitae ipsum ac porttitor. Ut vel commodo ex. Nam sodales lorem at pellentesque gravida. Aenean vulputate cursus quam, sed pretium ligula consequat ac. Sed in metus rutrum, condimentum enim nec, auctor nisl. In iaculis vehicula metus, vitae bibendum lectus blandit vitae. Aliquam vel lorem mattis ex accumsan bibendum. Quisque quis dui lectus. Etiam quis iaculis diam. Nunc interdum pretium mi at ultricies.

          Quisque ex lacus, interdum sit amet varius eget, varius eu orci. Fusce porta malesuada nunc vel vehicula. Donec imperdiet sit amet diam a vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Maecenas lectus est, malesuada non porta sed, mattis non urna. Aenean accumsan arcu nec hendrerit elementum. Vestibulum molestie enim odio, quis dignissim lacus bibendum vitae. Pellentesque suscipit tristique nunc, imperdiet venenatis justo.

          Integer nisl sapien, ultrices eu porttitor et, imperdiet eu sem. Maecenas et diam id arcu convallis pharetra blandit vel nulla. Nam porttitor ac ex luctus volutpat. Pellentesque ultrices lobortis augue, ac posuere tellus rhoncus non. Vivamus fermentum mattis hendrerit. Nullam a ultricies est. Etiam vestibulum ligula nec velit laoreet, vel varius diam accumsan. Cras metus neque, efficitur sit amet accumsan eget, tempus sit amet felis. Vestibulum rhoncus tempor arcu, in cursus nunc ornare ac. Vestibulum id fermentum nulla. Phasellus quis dignissim mauris. Cras dictum felis est, et imperdiet orci laoreet id. Praesent consequat velit sed semper egestas. Donec commodo orci felis, sit amet placerat sapien consectetur non. Aliquam ut purus venenatis, maximus augue vitae, scelerisque magna. Pellentesque imperdiet vehicula ligula, vulputate consequat justo tristique porta.

          Nulla interdum facilisis ex, vitae tempor lacus sagittis vitae. Quisque fermentum cursus rhoncus. Suspendisse sodales ultrices magna, eget cursus purus tincidunt et. Praesent eu ipsum vitae nulla malesuada pellentesque non ac orci. Donec molestie convallis lectus sit amet consectetur. Nam vehicula vel erat ac elementum. Nullam enim ligula, vehicula quis mauris et, bibendum varius tellus. Nunc iaculis orci quis est pharetra condimentum. Nullam et posuere sapien. Fusce auctor lorem vitae lacus semper, vel convallis magna porta. Nulla tincidunt ullamcorper magna, non sagittis justo scelerisque iaculis. Cras tincidunt odio sed nibh pretium, in vehicula lacus ultricies. Phasellus augue velit, semper eget lectus et, tincidunt tincidunt neque. Morbi vel convallis tortor.
        `
      }
    ]

    res.setHeader('Content-Type', 'application/json')
    res.end(JSON.stringify({ articles }))
  }
}
