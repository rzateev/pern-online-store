const uuid = require('uuid')
const path = require('path')
const {Device, DeviceInfo} = require('../models/models.js')

class DeviceController {
    async create(req,res) {
        console.log('device controller')
        try {
            let  {name, price, brandId, typeId, info} = req.body
            const {img} = req.files
            let fileName = uuid.v4() + '.jpg'
            await img.mv(path.resolve(__dirname, "..", 'static', fileName))

            const device = await Device.create({name, price, brandId, typeId, info, img: fileName})

            if (info) {
                info = JSON.parse(info)
                info.forEach(i =>
                    DeviceInfo.create({
                       title: i.title,
                        description: i.description,
                        deviceId:device.id
                    }))
            }



            return res.json(device)

        } catch (e) {
            console.log(e.message)
             //   next(ApiError.badRequest(e.message))


          
        }

    }

    async getAll(req,res) {
        let {brandId, typeId, limit, page} = req.query;
        page = page || 1
        limit = limit || 9
        let offcet = page  * limit -limit
        let devices;
        if (!brandId && !typeId) {
            devices = await Device.findAndCountAll({limit,offcet})
        }
        if (brandId && !typeId) {
            devices = await Device.findAndCountAll({where:{brandId}}, limit, offcet)
        }

        if (!brandId && typeId) {
            devices = await Device.findAndCountAll({where:{typeId}}, limit, offcet)
        }

        if (brandId && typeId) {
            devices = await Device.findAndCountAll({where:{typeId,brandId}}, limit, offcet)
        }

        return res.json(devices)
    }



    async getOne(req,res) {

        const {id} = req.params
        const device = await  Device.findOne(
            {
                where: {id},
                include: [{model: DeviceInfo, as: 'info'}]
            }
        )
        return res.json(device)

    }
}

module.exports = new DeviceController()
