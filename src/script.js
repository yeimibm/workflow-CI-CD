const deployStatus = document.querySelector('#deploy-status')

if (deployStatus) {
  const deployedAt = new Intl.DateTimeFormat('es-GT', {
    dateStyle: 'medium',
    timeStyle: 'short',
  }).format(new Date())

  deployStatus.textContent = `Sitio estatico cargado correctamente: ${deployedAt}`
}
