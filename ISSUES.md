# Known issues

| [Date(YYYYMMDD)] - [Version(R.C.I)] - [GitHub-User] |
|---|
| [Detailed description] |
| [Considerations and caused problems] |
| [Suggestions] |

---

| 20181007 - 1.0.0 - 2mod |
|---|
| Since applied modifiers are not tested, it is possible to assign inexistent CSS classes to an element. |
| This does not cause any issues, but also wont allow changing the style of the tooltip by declaring the assigned classes. |

| 20181007 - 1.0.0 - 2mod |
|---|
| Tooltips are static once they are applied, so it is not possible to perform dynamic changes on content, position or style. |
| This has a performance benefit, but also limits the flexibility. |
| It should be possible to alter the Vue directive implementation, to allow updating tooltips after initialization. But preserving the performance of static tooltips has the highest priority. |
