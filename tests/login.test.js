import { Selector } from 'testcafe';

fixture`Test Login`
    .page`http://localhost:8080/public/index.html`;

test('Connexion avec identifiants valides', async t => {
    await t
        .typeText('#email', 'test@example.com')
        .typeText('#password', '123456')
        .click('button')
        .expect(Selector('#message').innerText)
        .eql('Connexion réussie !');
});
