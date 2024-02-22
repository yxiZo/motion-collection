// @ts-nocheck
import multer  from 'multer';
import type { NextApiRequest, NextApiResponse } from 'next'

type ResponseData = {
    message: string
}
  
const upload = multer({ dest: 'uploads/' });

function runMiddleware(req: NextApiRequest, res:NextApiResponse<ResponseData>, fn) {
  return new Promise((resolve, reject) => {
    fn(req, res, (result) => {
      if (result instanceof Error) {
        return reject(result)
      }

      return resolve(result)
    })
  })
}

async function handler(req: NextApiRequest, res:NextApiResponse<ResponseData>) {
  try {
     await runMiddleware(req, res, upload.single("avatar"))
  } catch (e) {
   /* handle error */
  }
  console.log('req.body', req.body);
  return res.json({ message: 'Hello Everyone!' })
}

export const config = {
    api: {
        bodyParser: false,
    },
};

export default handler