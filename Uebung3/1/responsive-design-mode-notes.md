# Responsive Design Mode - Analyse am Beispiel von Uebung1-4bis10

## Ich gehe hier auf die genannten Lösungen aus Uebung1 ein und versuche ebenfalls zu erklären, warum welcher Umstand eintritt.

## 1. **Verhalten im Responsive Design Mode**

- **Box-Größen und Layouts:**
  - Feste Größen für Boxen (`width: 200px; height: 150px;`) könnten auf kleineren Geräten nicht gut funktionieren.
  - Es können Horizontalscroll-Leisten auftreten, da die Boxen nicht flexibel sind.

- **Flexbox-Verhalten:**
  - Die `.paragraph-container` mit `display: flex` wird sich in kleinen Bildschirmgrößen gut anpassen und vertikal anordnen.
  - Wenn `flex-direction: row` verwendet wird, könnten die Elemente über den Bildschirmrand hinausgehen.

- **Textgrößen:**
  - Relative Größen (`em` und `rem`) passen sich besser an, da sie von der Root-Textgröße abhängen.

- **Farben und Deckkraft:**
  - Farben und Transparenz bleiben gleich, aber geringe Farbdarstellungen auf Geräten könnten den Unterschied in der Deckkraft weniger sichtbar machen.

- **Ränder und Abstände:**
  - Feste Werte für `margin`, `padding`, `border` können auf kleineren Bildschirmen zu Platzproblemen führen.
  - Elemente könnten zu eng nebeneinander stehen oder abgeschnitten werden.

- **Kein responsives Design:**
  - Die Seite wird auf kleineren Bildschirmen skaliert, was zu:
    - Überlappenden Elementen
    - Unleserlichen Texten
    - Abgeschnittenen Inhalten führen kann.