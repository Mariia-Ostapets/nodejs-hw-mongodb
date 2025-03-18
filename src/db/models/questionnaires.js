import { model, Schema } from 'mongoose';

const questionsSchema = new Schema({ question: { type: String } });

const answersSchema = new Schema({ answer: { type: String } });

const questionnaireSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    amountQuestions: {
      type: Number,
      required: true,
    },
    amountCompletions: {
      type: Number,
      required: true,
    },
    questions: [questionsSchema],
    answers: [answersSchema],
  },
  {
    timestamps: true,
    versionKey: false,
  },
);

export const QuestionnairesCollection = model(
  'questionnaires',
  questionnaireSchema,
);
