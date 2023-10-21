<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;
use App\Repository\ExperienceRepository;
use ApiPlatform\Core\Annotation\ApiResource;

/**
 * @ORM\Entity(repositoryClass=ExperienceRepository::class)
 * @ApiResource(formats={"json"})
 */
class Experience
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     * 
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $profil;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $durree;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $contrat;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $fonction;

    /**
     * @ORM\ManyToOne(targetEntity=Candidat::class, inversedBy="experiences")
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

    public function getProfil(): ?string
    {
        return $this->profil;
    }

    public function setProfil(string $profil): self
    {
        $this->profil = $profil;

        return $this;
    }

    public function getDurree(): ?string
    {
        return $this->durree;
    }

    public function setDurree(string $durree): self
    {
        $this->durree = $durree;

        return $this;
    }

    public function getContrat(): ?string
    {
        return $this->contrat;
    }

    public function setContrat(string $contrat): self
    {
        $this->contrat = $contrat;

        return $this;
    }

    public function getFonction(): ?string
    {
        return $this->fonction;
    }

    public function setFonction(string $fonction): self
    {
        $this->fonction = $fonction;

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
