<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;
use App\Repository\FormationRepository;
use ApiPlatform\Core\Annotation\ApiResource;

/**
 * @ORM\Entity(repositoryClass=FormationRepository::class)
 * @ApiResource(formats={"json"})
 */
class Formation
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $nivetude;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $diplome;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $etablissement;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $specialite;

    /**
     * @ORM\ManyToOne(targetEntity=Candidat::class, inversedBy="formations")
     * @ORM\JoinColumn(nullable=false,onDelete="CASCADE")
     */
    private $candidat;

    /**
     * @ORM\Column(type="integer")
     * @ORM\JoinColumn(name="candidat_id", referencedColumnName="id")
     */
    private $candidat_id;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getNivetude(): ?string
    {
        return $this->nivetude;
    }

    public function setNivetude(string $nivetude): self
    {
        $this->nivetude = $nivetude;

        return $this;
    }

    public function getDiplome(): ?string
    {
        return $this->diplome;
    }

    public function setDiplome(string $diplome): self
    {
        $this->diplome = $diplome;

        return $this;
    }

    public function getEtablissement(): ?string
    {
        return $this->etablissement;
    }

    public function setEtablissement(string $etablissement): self
    {
        $this->etablissement = $etablissement;

        return $this;
    }

    public function getSpecialite(): ?string
    {
        return $this->specialite;
    }

    public function setSpecialite(string $specialite): self
    {
        $this->specialite = $specialite;

        return $this;
    }

    public function getCandidat(): ?Candidat
    {
        return $this->candidat;
    }

    public function setCandidat(?Candidat $candidat): self
    {
        $this->candidat = $candidat;

        return $this;
    }

    public function getCandidatId(): ?int
    {
        return $this->candidat_id;
    }

    public function setCandidatId(int $candidat_id): self
    {
        $this->candidat_id = $candidat_id;

        return $this;
    }
}
