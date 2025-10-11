# PowerShell script to batch update game pages
# This script replaces hardcoded game arrays with allGames.slice(0, 12)

$pages = @(
    "src/pages/BrainrotHookSwingPage.tsx",
    "src/pages/FixDaBrainrotPage.tsx",
    "src/pages/ItalianBrainrotBabyClickerPage.tsx",
    "src/pages/ItalianBrainrotClicker2Page.tsx",
    "src/pages/MemoryBrainrotPage.tsx",
    "src/pages/ObbyMySingingBrainrotPage.tsx",
    "src/pages/PlantsVsBrainrotsPage.tsx",
    "src/pages/StealBrainrotNewAnimalsPage.tsx",
    "src/pages/StealBrainrotOnlinePage.tsx",
    "src/pages/StealTheItalianBrainrotPage.tsx"
)

$replacementCode = @'
{allGames.slice(0, 12).map((game, i) => (
                <a
                  key={i}
                  href={isRealGame(game) ? `/game/${game.slug}` : '#'}
                  className="group cursor-pointer block"
                  onClick={(e) => !isRealGame(game) && e.preventDefault()}
                >
                  <div className={`relative aspect-square rounded-xl overflow-hidden border-3 border-gray-300 hover:border-cyan-400 transition-all duration-300 hover:scale-105 shadow-md hover:shadow-xl ${isRealGame(game) ? 'bg-white' : `bg-gradient-to-br ${game.color}`}`}>
                    {isRealGame(game) ? (
                      <>
                        {game.releaseDate && <NewBadge releaseDate={game.releaseDate} />}
                        <img
                          src={game.image}
                          alt={game.name}
                          className="w-full h-full object-cover"
                        />
                      </>
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-4xl md:text-5xl">
                        {game.emoji}
                      </div>
                    )}
                  </div>
                  <p className="text-center text-sm font-semibold text-gray-700 mt-2 truncate">{game.name}</p>
                </a>
              ))}
'@

Write-Host "Batch Update Game Pages Script" -ForegroundColor Cyan
Write-Host "===============================" -ForegroundColor Cyan
Write-Host ""
Write-Host "This script will update the following pages:" -ForegroundColor Yellow
foreach ($page in $pages) {
    Write-Host "  - $page" -ForegroundColor Gray
}
Write-Host ""
Write-Host "Note: This is a template script. Manual updates are recommended." -ForegroundColor Red
Write-Host "Use the str-replace-editor tool in Augment to make the actual changes." -ForegroundColor Red

