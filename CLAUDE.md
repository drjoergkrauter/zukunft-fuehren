# Website zukunft-fuehren

Dieser Ordner ist das GitHub-Repository `drjoergkrauter/zukunft-fuehren`.
Daraus entsteht die Website https://zukunft-fuehren.com zum Buch
„Zukunft führen“ von Dr. Jörg Krauter. Es ist eine statische Seite aus
reinen HTML-Dateien (kein Build-Schritt, `.nojekyll` ist gesetzt).

## Aufbau

- `index.html`: Startseite
- `blog/`: Buchbesprechungen, je eine HTML-Datei, Übersicht in `blog/index.html`
- `wochenschrift/`: Ausgaben in Datumsordnern (`JJJJ-MM-TT`),
  Liste in `wochenschrift/ausgaben.json`, RSS-Feed in `wochenschrift/feed.xml`
- `glossar/`: je Begriff ein Ordner, Übersicht in `glossar/index.html`
- `analysen/`, `ki-realitaets-check/`, `bani-test/`, `uhr/`, `mcp/`: Einzelseiten
- `impressum/`, `datenschutz/`: Rechtstexte – nur nach Rücksprache ändern
- `assets/`: Schriften, Bilder, gemeinsame Styles
- `llms.txt`: Inhaltsübersicht für KI-Systeme – bei neuen Seiten ergänzen
- `server.json`, `.github/workflows/publish-mcp.yml`: MCP-Registry-Eintrag – nicht ohne Rücksprache ändern
- `CNAME`: Domain – nie ändern oder löschen

## Regeln

- Neue Seiten nach dem Muster einer bestehenden Seite derselben Rubrik bauen
  (gleicher Kopf, gleiche Styles, gleiche Navigation).
- Bei neuen Seiten immer auch die passenden Übersichten aktualisieren
  (`blog/index.html`, `glossar/index.html`, `wochenschrift/ausgaben.json`,
  `wochenschrift/feed.xml`, `llms.txt`).
- Sprache: Deutsch. Leserinnen und Leser werden mit „Sie“ angesprochen.
- Am Ende jeder Aufgabe auflisten, welche Dateien geändert oder neu angelegt wurden.

## Veröffentlichen

- **In Cowork:** nichts committen oder pushen. Das erledigt der Autor selbst
  in GitHub Desktop (Commit to main, dann Push origin).
- **In Claude Code:** vor der Arbeit `git pull`; Änderungen nur nach
  ausdrücklicher Freigabe auf `main` pushen – jeder Push auf `main` geht live.
