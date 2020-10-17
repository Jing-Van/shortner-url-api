import Model from '../models/model';

const urlsModel = new Model('urls');
export const urlsPage = async (req, res) => {
  try {
    //const data = await urlsModel.select('shortened_url, original_url');
    const data = await urlsModel.select('id');
    res.status(200).json({ urls: data.rows });
  } catch (err) {
    res.status(200).json({ urls: err.stack });
  }
};