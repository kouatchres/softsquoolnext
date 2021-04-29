import { objectType } from '@nexus/schema';

export const Prof = objectType({
  name: 'Prof',
  definition(t) {
    t.model.id();
    t.model.prof1stName();
    t.model.prof2ndName();
    t.model.prof3rdName();
    t.model.profMatricule();
    t.model.gender();
    t.model.image();
    t.model.email();
    t.model.phoneNumber();
    t.model.profSecretCode();
    t.model.specialty();
  }
});
