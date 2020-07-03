# 🆘 Eerste hulp bij GIT problemen

Problemen met GIT? Onderstaand een aantal handige oplossingen om snel weer aan de slag te kunnen.

## Je werk middels een PR (Pull Request) mergen in de `dev` branch

Wanneer je klaar bent met je werk en deze graag wil samenvoegen in het project, voer je het volgende uit:

1. Zorg er voor dat al je werk middels `commits`, gepusht is naar de remote (Bitbucket)
2. Ga vervolgens naar de [lijst met Pull Requests](https://github.com/student-techlife/IPMEDT4-binnentuin-frontend/pulls) op Bitbucket
3. Klik op **Create pull request**
4. Controleer of je de juiste branch aanbied om te mergen
5. Controleer onderaan bij **Diffs** of er mogelijk een **merge conflict** optreed. Dit herken je eenvoudig middels een grote gele waarschuwing. In het geval van een merge conflict, dien je nog een [rebase](#bij-blijven-met-de-dev-branch) uit te voeren.
6. Geef de PR een titel en beschrijving
7. Klik op **Create pull request**

## Bij blijven met de `dev` branch

Als je je eigen branch wil bijwerken met de laatste aanpassingen van de `dev` branch, dien je een **rebase** uit te voeren. Dit kan eenvoudig door onderstaande stappen te volgen:

*In geval van openstaande wijzigingen, krijg je een foutmelding. Daarom eerst al je werk committen voordat je een rebase uitvoert. Of probeer [onderstaande methode](#tussen-door-rebasen-met-uncommitted-werk)* ⬇️

```bash
git checkout [BRANCH NAAM]
git fetch origin dev
git rebase origin/dev
```

Als er met een rebase conflicten ontstaan, herhaal dan onderstaand proces totdat alle wijzigingen zijn opgelost:

1. `git status` toont je het bestand met het conflict; bewerk het bestand en los de lijnen op tussen `<<<< | >>>>`
2. Voeg het gewijzigde bestand toe: `git add <file>` of `git add.`
3. Doorgaan met de rebase: `git rebase --continue`
4. Herhaal dit totdat je alle conflicten hebt opgelost

Raak je in paniek? Breek dan de rebase af met: `git rebase --abort`.

### Tussen door rebasen met uncommitted werk

Het is mogelijk om tussentijds te rebasen, terwijl je nog changes open hebt staan. Hiervoor maak je gebruik van **stash**:

1. Zet je huidige uncommitted changes weg middels `git stash save [MESSAGE]`
2. Voer een [rebase](#bij-blijven-met-de-dev-branch) uit zoals hierboven
3. Zet je stash terug middels `git stash pop` (`pop` pakt automatich stash{0} en verwijderd deze ook meteen)

Bekijk je lijst met stashes middels:

```bash
git stash list
```

Verwijder een specifieke stash: (het nummer tussen {} verwijst naar het nummer in de stash list)

```bash
git stash drop stash@{1}
```

Verwijder alles in een keer:

```bash
git stash clear
```

## Hoe maak je een nieuwe branch

Als je een nieuwe branch wil maken die afstamt van de `dev` branch, voer je het volgende uit:

```bash
git checkout dev
git pull
git checkout -b [NIEUWE BRANCH NAAM]
```

Kort samengevat zorgt bovenstaande er voor dat je zeker op de `dev` branch zit, je de laatste wijzigingen binnen hebt gehaald en de laatste stap maakt daadwerkelijk een nieuwe branch voor je aan.

## Hoe verwijder je een branch local en op de remote?

Op je lokale machine:

```bash
git branch -d [BRANCH NAAM]
```

Op de remote:

```bash
git push origin -d [BRANCH NAAM]
```

---
Dit project is naar aanleiding van een studie project aan de Hogeschool van Leiden.