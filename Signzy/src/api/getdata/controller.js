
import mongoose from '../../services/mongoose';
import excels from '../models/excels';
export const create = ({ body }, res, next) => {
  excels({
    id
  })
  res.status(201).json(body)
}

export const index = ({ querymen: { query, select, cursor } }, res, next) => {
  console.log(excels);
  excels.find({}, function(err, excel) {
    if (err) throw err;
    res.status(200).json(excel)
  });
}

export const show = ({ params }, res, next) => {
  console.log(params.id);
  excels.find({ id: params.id }, function(err, excel) {
    if (err) throw err;
    res.status(200).json(excel[0])
  });
}

export const update = ({ body, params }, res, next) => {
  excels.findOneAndUpdate({ id: params.id }, body, function(err, user) {
    if (err) throw err;
  
    // we have the updated user returned to us
    console.log(user);
    res.status(200).json({
      success: true
    })
  });
}

export const destroy = ({ params }, res, next) =>
  res.status(204).end()
