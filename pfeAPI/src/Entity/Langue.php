<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;
use App\Repository\LangueRepository;
use ApiPlatform\Core\Annotation\ApiResource;

/**
 * @ORM\Entity(repositoryClass=LangueRepository::class)
 * @ApiResource(formats={"json"})
 */
class Langue
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
    private $nomlangue;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $niveau;

    /**
     * @ORM\ManyToOne(targetEntity=Candidat::class, inversedBy="langues")
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

    public function getNomlangue(): ?string
    {
        return $this->nomlangue;
    }

    public function setNomlangue(string $nomlangue): self
    {
        $this->nomlangue = $nomlangue;

        return $this;
    }

    public function getNiveau(): ?string
    {
        return $this->niveau;
    }

    public function setNiveau(string $niveau): self
    {
        $this->niveau = $niveau;

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
