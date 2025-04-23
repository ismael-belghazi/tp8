import { Selector } from 'testcafe';

fixture`Test de connexion et formulaire`
    .page`http://127.0.0.1:5500/index.html`;

test('Connexion réussie et soumission du formulaire', async t => {
    await t
        .typeText('#username', 'admin')
        .typeText('#password', '1234')
        .click('button[type="submit"]');
    await t
        .expect(Selector('#form-section').visible).ok();

    await t
        .typeText('#fullname', 'Jean Dupont')
        .typeText('#email', 'jean.dupont@example.com')
        .click('#submit-form');
});
