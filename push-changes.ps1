# push-changes.ps1
# Ejecuta este script en PowerShell desde la carpeta del repo para intentar
# hacer push de los cambios a `origin`.

Write-Host "Ejecutando push automático para el repo en: $(Get-Location)" -ForegroundColor Cyan

git status

$branch = git branch --show-current
Write-Host "Rama actual: $branch"

Write-Host "Comprobando remote 'origin'..."
git remote -v

Write-Host "Intentando push a origin/$branch..." -ForegroundColor Yellow
try {
    git push -u origin $branch
} catch {
    Write-Host "Push inicial falló. Intentando traer cambios y reintentar (fetch + rebase)..." -ForegroundColor Yellow
    git fetch origin
    git pull --rebase origin $branch
    git push origin $branch
}

if ($LASTEXITCODE -ne 0) {
    Write-Host "El push final falló. Posibles causas: autenticación, branch protegido o conflictos." -ForegroundColor Red
    Write-Host "Si la rama está protegida, el script creará y subirá una rama feature para abrir PR." -ForegroundColor Yellow
    $feat = "feat/tools-badges"
    git checkout -b $feat
    git push -u origin $feat
    Write-Host "Se creó y subió la rama $feat. Abre un PR en GitHub." -ForegroundColor Green
} else {
    Write-Host "Push completado correctamente." -ForegroundColor Green
}

Write-Host "Fin." -ForegroundColor Cyan
