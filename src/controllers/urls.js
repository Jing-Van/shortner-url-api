import Model from '../models/model';

const urlsModel = new Model('urls');
export const urlsPage = async (req, res) => {
  try {
    const data = await urlsModel.select('id, shortened_url, original_url');
    //const data = await urlsModel.select('id');
    res.status(200).json({ urls: data.rows });
  } catch (err) {
    res.status(200).json({ urls: err.stack });
  }
};

export const addUrl = async (req, res) => {
  const {original_url} = req.body;
  // const columns = 'shortened_url, original_url';
  // const values = `'${shortened_url}', '${original_url}'`;
  const columns = 'original_url';
  const values = `'${original_url}'`;
  console.log(values);

  let url = values
  var http = /^https?:\/\//i
  if (!http.test(url)) {
    url = 'http://' + url
  }
  let secret = req.body.secret
  let code = null

  if (!validUrl(url)) {
    return res.send('Unsupported link')
  }
  if (secret !== SHORTENER_SECRET && secret !== SHORTENER_GROUP_SECRET) {
    return res.send('No more making links without secret')
  }


  try {
    const data = await urlsModel.insertWithReturn(columns, values);
    res.status(200).json({ urls: data.rows });
  } catch (err) {
    res.status(200).json({ urls: err.stack });
  }
};