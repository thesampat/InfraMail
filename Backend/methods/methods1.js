const generateItemId = async (Model, Prefix) => {
    try {
      const count = await Model.countDocuments({});
      const itemId = `${Prefix}${(count + 1).toString().padStart(5, '0')}`;
      return itemId;
    } catch (err) {
      console.error(err);
      return null;
    }
  };
  
  module.exports = { generateItemId };