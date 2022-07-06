var express = require('express');
var router = express.Router();
const jsonparser = require('body-parser').json();
router.use(jsonparser);
const knex = require('../database');


/*
  General properties for a sensor device
  Treq,      // send data period milliseconds
  scale,  // Unit converter, default 1
  unit,   // Unit todisplay
  values:[],  // Last registeded at first position
*/

async function getDevCatids() {}
async function getDevids() {}
async function getSensorCatids() {}

var lastrcvd = {}

// Home page route.
router.get('/', async function (req, res) {
  console.log('fiom iot test point')
  res.status(200).json({
    data: {
      data1: 'asdasdsa'
    }
  });

})

/* Devices endpoint */

router.get('/devices', async function (req, res) {
  res.status(200).json({});
})

router.get('/devices/:id/initial',async  function (req, res) {
  knex('')
  .then(rsp => {

  })

})

router.get('/devices/:id/status', async function (req, res) {
  knex('')

})

router.get('/devices/data', async function (req, res) {
  knex('')
})

router.get('/devices/:id/data', async function (req, res) {
  knex('')

})

/* Device Category API */
router.get('/devices/categories', async function (req, res) {
  var categories = await knex('dispositivos_categorias').select();
  res.status(200).json({categories});

})

router.get('/devices/:id/sensors', async function (req, res) {
  
})

/*
  data:{
    sensor,
    value,
  },
  *auth: {
    IN
  }
*/

router.post('/devices/:name/samples', async function (req, res) {
  var toret = {};
  const { name } = req.params;
  const { sensor,value } = req.body;
  console.log(req.body)
  var rstlt = await knex.raw('insert into dispositivos_mediciones(dime_dispositivo,dime_sensor,dime_valor) select dis.dis_id,sen.sens_id,' + value + ' from '
  + 'dispositivos_sensores as ds inner join sensores as sen on sen.sens_id = ds.sen_sensor inner join dispositivos as dis on dis.dis_id = ds.sen_dispositivo where dis.dis_nombre = \'' + name + '\'')
  res.status(200).json({response:rstlt[0]});
})


/* Sensors endpoint */


// Categories
router.get('/sensors/categories', async function (req, res) {
  var categories = await knex('sensores_categorias').select();
  res.status(200).json({categories});
})

/*
  data: {
    name
  }
*/

router.post('/sensors/categories', async function (req, res) {
  const { name } = req.body;
  if( name == undefined ){ res.status(400).json({msg:'No Category name specified'}); return; }
  var categories = await knex('sensores_categorias').select();
  res.status(200).json({categories});
})

router.put('/sensors/categories', async function (req, res) {
  
})

router.delete('/sensors/categories', async function (req, res) {
 
})

/* Sensors endpoint */

router.get('/sensors', async function (req, res) {
  knex('')
  .then(rsp => {

  })

})

router.post('/sensors', async function (req, res) {
  knex('')
  .then(rsp => {

  })

})

router.put('/sensors', async function (req, res) {
  knex('')
  .then(rsp => {

  })

})

router.delete('/sensors', async function (req, res) {
  knex('')
  .then(rsp => {

  })

})





router.post('/', async function (req, res) {
  console.log(req.body);
  // Get initials
  var namestr = '';
  var flds = req.body.machine.split(' ');
  flds.forEach(fl => {namestr += fl[0];});
  lastrcvd[namestr] = req.body;
  res.status(200).json({ msg: 'From Post test endpoint' });

})

router.get('/:id/last', async function (req, res) {
  // From last endpoint
  const { id } = req.params;
  console.log('From last endpoint ' + id);
  console.log(lastrcvd);
  res.status(200).json({ last: lastrcvd[id].pulses });

})

// About page route.
router.get('/about', async function (req, res) {
  res.send('About this wiki');
})

module.exports = router;