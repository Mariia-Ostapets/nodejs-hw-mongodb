// import { SORT_ORDER } from '../constants/index.js';
import { QuestionnairesCollection } from '../db/models/questionnaires.js';
import { calculatePaginationData } from '../utils/calculatePaginationData.js';

export const getAllQuestionnaires = async ({
  page = 1,
  perPage = 10,
  //   sortOrder = SORT_ORDER.ASC,
  //   sortBy = '_id',
  //   filter = {},
  //   userId,
}) => {
  const limit = perPage;

  const skip = (page - 1) * perPage;

  const questionnairesQuery = QuestionnairesCollection.find();

  //   if (filter.contactType) {
  //     contactsQuery.where('contactType').equals(filter.contactType);
  //   }

  //   if (filter.isFavourite !== null && filter.isFavourite !== undefined) {
  //     contactsQuery.where('isFavourite').equals(filter.isFavourite);
  //   }

  const [questionnairesCount, questionnaires] = await Promise.all([
    QuestionnairesCollection.find().merge(questionnairesQuery).countDocuments(),
    questionnairesQuery
      .skip(skip)
      .limit(limit)
      // .sort({ [sortBy]: sortOrder })
      .exec(),
  ]);

  const paginationData = calculatePaginationData(
    questionnairesCount,
    perPage,
    page,
  );

  const count = await QuestionnairesCollection.countDocuments();
  console.log('Total documents:', count);

  return {
    data: questionnaires,
    ...paginationData,
  };
};

// export const getContactById = async (contactId, userId) => {
//   const contact = await ContactsCollection.findOne({ _id: contactId, userId });
//   return contact;
// };

// export const createContact = async (payload) => {
//   const contact = await ContactsCollection.create(payload);
//   return contact;
// };

// export const deleteContact = async (contactId, userId) => {
//   const contact = await ContactsCollection.findOneAndDelete({
//     _id: contactId,
//     userId,
//   });
//   return contact;
// };

// export const updateContact = async (contactId, payload, userId, options) => {
//   const rawResult = await ContactsCollection.findOneAndUpdate(
//     { _id: contactId, userId },
//     payload,
//     { new: true, includeResultMetadata: true, ...options },
//   );

//   if (!rawResult || !rawResult.value) return null;

//   return {
//     contact: rawResult.value,
//     isNew: Boolean(rawResult?.lastErrorObject?.upserted),
//   };
// };
