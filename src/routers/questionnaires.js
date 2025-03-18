import { Router } from 'express';
import {
  getQuestionnairesController,
  //   createContactController,
  //   deleteContactController,
  //   getContactByIdController,
  //   getContactsController,
  //   patchContactController,
} from '../controllers/questionnaires.js';
import { ctrlWrapper } from '../utils/ctrlWrapper.js';
// import { validateBody } from '../middlewares/validateBody.js';
// import {
//   createContactSchema,
//   updateContactSchema,
// } from '../validation/contacts.js';

const router = Router();

router.get('/', ctrlWrapper(getQuestionnairesController));

// router.get('/:contactId', isValidId, ctrlWrapper(getContactByIdController));

// router.post(
//   '/',
//   upload.single('photo'),
//   validateBody(createContactSchema),
//   ctrlWrapper(createContactController),
// );

// router.delete('/:contactId', isValidId, ctrlWrapper(deleteContactController));

// router.patch(
//   '/:contactId',
//   isValidId,
//   upload.single('photo'),
//   filterEmptyFields,
//   validateBody(updateContactSchema),
//   ctrlWrapper(patchContactController),
// );

export default router;
